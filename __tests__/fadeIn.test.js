import { fadeIn } from '../variants';

describe('fadeIn utility', () => {
  it('returns hidden state with correct offsets for up', () => {
    const v = fadeIn('up', 0.2);
    expect(v.hidden.y).toBe(80);
    expect(v.hidden.x).toBe(0);
    expect(v.hidden.opacity).toBe(0);
    expect(v.show.opacity).toBe(1);
    expect(v.show.transition.delay).toBe(0.2);
  });

  it('returns hidden state with correct offsets for down', () => {
    const v = fadeIn('down', 0.1);
    expect(v.hidden.y).toBe(-80);
  });

  it('handles left/right directions', () => {
    expect(fadeIn('left', 0).hidden.x).toBe(80);
    expect(fadeIn('right', 0).hidden.x).toBe(-80);
  });

  it('defaults offsets to 0 for unknown direction', () => {
    const v = fadeIn('weird', 0);
    expect(v.hidden.x).toBe(0);
    expect(v.hidden.y).toBe(0);
  });
});
