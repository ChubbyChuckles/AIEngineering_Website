//fonts
import { Sora } from "next/font/google";

//font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Enhancements from "../components/Enhancements";
import { useEffect, useState } from "react";

const commands = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const CommandPalette = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-start justify-center pt-24 bg-black/50 backdrop-blur-sm"
    >
      <div className="w-full max-w-lg mx-auto bg-primary border border-white/10 rounded-xl shadow-2xl overflow-hidden">
        <input
          autoFocus
          aria-label="Search navigation"
          className="w-full px-4 py-3 bg-transparent border-b border-white/10 outline-none"
          placeholder="Type to filter..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="max-h-80 overflow-y-auto">
          {filtered.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="block px-4 py-2 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
          {!filtered.length && (
            <li className="px-4 py-6 text-sm text-white/50">No matches</li>
          )}
        </ul>
        <div className="px-4 py-2 text-[11px] text-white/40 flex justify-between">
          <span>Navigate with keyboard. Enter to go.</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);
  useEffect(() => {
    const open = () => setPaletteOpen(true);
    window.addEventListener("open-command-palette", open);
    return () => window.removeEventListener("open-command-palette", open);
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div
        className={`page bg-site ${
          theme === "dark" ? "text-white" : "text-primary"
        } bg-cover bg-no-repeat ${sora.variable} font-sora relative ${theme}`}
      >
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="fixed bottom-4 left-4 z-50 px-3 py-2 rounded-md bg-white/10 backdrop-blur hover:bg-white/20 text-sm focus-ring"
        >
          {theme === "dark" ? "Light" : "Dark"} mode
        </button>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <Enhancements />
      </div>
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
    </>
  );
};

export default Layout;
