import "@testing-library/jest-dom";
import "whatwg-fetch";

// Mock next/image to behave like a normal img tag
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    const { priority, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

// Basic mock for swiper/react to avoid DOM/ResizeObserver issues
jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

// Mock swiper core modules referenced (FreeMode, Pagination)
jest.mock("swiper", () => ({
  FreeMode: function FreeMode() {},
  Pagination: function Pagination() {},
}));

// Mock framer-motion to reduce animation complexity (keep variants accessible)
jest.mock("framer-motion", () => {
  const React = require("react");
  const validTags = new Set([
    "div",
    "span",
    "section",
    "header",
    "footer",
    "main",
    "nav",
    "ul",
    "li",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "button",
    "a",
    "form",
    "input",
    "textarea",
    "img",
  ]);
  const create = (Tag) =>
    React.forwardRef(({ children, ...rest }, ref) => {
      const Comp = Tag;
      return (
        <Comp ref={ref} {...rest}>
          {children}
        </Comp>
      );
    });
  return {
    __esModule: true,
    // Provide a minimal motion proxy that returns the correct intrinsic element to retain semantics (e.g., motion.form -> <form>)
    motion: new Proxy(
      {},
      { get: (_, prop) => create(validTags.has(prop) ? prop : "div") }
    ),
  };
});

// Mock react-tsparticles (ParticlesContainer usage) if present
jest.mock("react-tsparticles", () => ({
  __esModule: true,
  Particles: ({ init, loaded, ...rest }) => (
    <div data-testid="particles" {...rest} />
  ),
}));

// Suppress Next.js Link intersection observer visibility updates (act warnings)
jest.mock("next/dist/client/use-intersection", () => ({
  __esModule: true,
  useIntersection: () => [() => {}, true, () => {}],
}));

// Router helper (tests can override as needed)
const mockRouter = {
  pathname: "/",
  prefetch: jest.fn().mockResolvedValue(null),
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
  beforePopState: jest.fn(),
  isFallback: false,
};

jest.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

// Utility to allow tests to change pathname
global.__setRouterPathname = (path) => {
  mockRouter.pathname = path;
};

// matchMedia mock (for prefers-reduced-motion, theme toggles)
if (typeof window !== "undefined" && !window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
}
