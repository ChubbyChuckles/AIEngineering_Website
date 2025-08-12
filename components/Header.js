// next Image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";
import { useState } from "react";
import { navData } from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute z-30 w-full flex items-center px-6 sm:px-10 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={200}
              height={44}
              alt="Site logo"
              priority={true}
            />
          </Link>
          {/* mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden ml-auto mr-4 p-2 rounded-md bg-white/10 hover:bg-white/20 focus-ring"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1" />
            <span className="block w-6 h-0.5 bg-current mb-1" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
          <nav
            id="mobile-menu"
            className={`lg:hidden ${
              open ? "flex" : "hidden"
            } flex-col gap-4 w-full mt-4 bg-primary/90 backdrop-blur-sm p-4 rounded-lg border border-white/10`}
            aria-label="Mobile"
          >
            {navData.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-3 py-2 rounded-md hover:bg-white/10 focus-ring text-sm capitalize"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
