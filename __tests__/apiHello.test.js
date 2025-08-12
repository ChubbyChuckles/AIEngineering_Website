import handler from '../pages/api/hello';

// Helper to simulate Next.js API route call
function runApi(handler, { method = 'GET', body } = {}) {
  return new Promise((resolve) => {
    const req = { method, body };
    const res = {
      statusCode: 0,
      jsonPayload: null,
      status(code) { this.statusCode = code; return this; },
      json(payload) { this.jsonPayload = payload; resolve({ status: this.statusCode, body: payload }); },
    };
    handler(req, res);
  });
}

describe('API /api/hello', () => {
  it('returns expected JSON response', async () => {
    const { status, body } = await runApi(handler, {});
    expect(status).toBe(200);
    expect(body).toEqual({ name: 'John Doe' });
  });
});
