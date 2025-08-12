import { render, screen } from '@testing-library/react';
import Nav, { navData } from '../components/Nav';

const setPath = (p) => global.__setRouterPathname(p);

describe('Nav', () => {
  it('renders all navigation links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    // Expect same number as navData
    expect(links).toHaveLength(navData.length);
    navData.forEach(item => {
      const match = links.find(l => l.getAttribute('href') === item.path);
      expect(match).toBeTruthy();
    });
  });

  it('applies active class when pathname matches', () => {
    setPath('/about');
    render(<Nav />);
    const aboutLink = screen.getAllByRole('link').find(l => l.getAttribute('href') === '/about');
    expect(aboutLink.className).toMatch(/text-accent/);
  });
});
