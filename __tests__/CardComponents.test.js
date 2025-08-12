import { render, screen } from '@testing-library/react';
import CardLeft from '../components/CardLeft';
import CardRight from '../components/CardRight';

describe('Card components', () => {
  it('renders CardLeft', () => {
    render(<CardLeft />);
    expect(screen.getByText(/Card Left/i)).toBeInTheDocument();
  });
  it('renders CardRight', () => {
    render(<CardRight />);
    expect(screen.getByText(/Card Right/i)).toBeInTheDocument();
  });
});
