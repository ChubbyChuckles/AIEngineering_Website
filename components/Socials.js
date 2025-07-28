// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.youtube.com/@SSV-Stoetteritz-TT"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href="https://www.instagram.com/ssvstoetteritz_tischtennis"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://www.facebook.com/zuck"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href="https://github.com/ChubbyChuckles"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
