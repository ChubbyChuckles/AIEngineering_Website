// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// next link
import Link from "next/link";

// next router
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [activePath, setActivePath] = useState(pathname);

  // Scroll spy (observes elements with data-section attribute) - enhances on long pages
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id && pathname === "/") {
              // Only override on home (single-page style) to avoid fighting router
              setActivePath("/");
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Keyboard shortcut for command palette (Ctrl+K / Cmd+K) broadcast custom event
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("open-command-palette"));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <nav
      aria-label="Primary"
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max 
      bottom-0 mt-auto xl:right-[2%] z-50 top-auto xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/* inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent
      xl:justify-center gap-y-10 px-4 md:px-20 xl:px-0 h-[70px] xl:h-max py-6 bg-white/10
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full touch-pan-x"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === activePath && "text-accent"
              } relative flex items-center group hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-full p-2 transition-all
              duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div
                  className="bg-white relative flex text-primary items-center 
                p-[6px] rounded-[3px]"
                >
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div
                    className="border-solid border-l-white border-l-8 
                  border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  ></div>
                </div>
              </div>

              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
