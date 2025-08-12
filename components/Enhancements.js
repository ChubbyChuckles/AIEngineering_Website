import { useEffect, useState } from "react";

// Lightweight UX enhancements: scroll progress bar, back-to-top button, dismissible banner.
const bannerStorageKey = "bannerDismissedV1";

export default function Enhancements() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Banner: only show if not dismissed
    try {
      const dismissed = localStorage.getItem(bannerStorageKey) === "1";
      if (!dismissed) setShowBanner(true);
    } catch {}

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setProgress(pct);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismissBanner = () => {
    setShowBanner(false);
    try {
      localStorage.setItem(bannerStorageKey, "1");
    } catch {}
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        data-testid="scroll-progress"
        aria-hidden="true"
        style={{ width: progress + "%", transform: "translateZ(0)" }}
        className="fixed top-0 left-0 h-1 bg-accent/80 z-[70] transition-[width] duration-150"
      />
      {/* Banner */}
      {showBanner && (
        <div
          role="status"
          className="fixed top-0 inset-x-0 z-[65] flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-accent/90 to-accent text-white text-sm shadow-md"
        >
          <span className="font-medium">New:</span>
          <span className="opacity-90">
            Bilingual interface now available. Try the language toggle (EN/DE).
          </span>
          <button
            onClick={dismissBanner}
            aria-label="Dismiss announcement"
            className="ml-auto text-white/80 hover:text-white focus-ring rounded"
          >
            ×
          </button>
        </div>
      )}
      {/* Back to top button */}
      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 z-[60] w-10 h-10 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-lg hover:bg-accent focus-ring transition-colors"
        >
          ↑
        </button>
      )}
    </>
  );
}
