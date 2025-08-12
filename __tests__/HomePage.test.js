import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
  it('renders main marketing message and work link', () => {
    render(<Home />);
    expect(screen.getByText(/Transforming Ideas/i)).toBeInTheDocument();
    const workLink = screen.getAllByRole('link').find(l => l.getAttribute('href') === '/work');
    expect(workLink).toBeInTheDocument();
  });
});
