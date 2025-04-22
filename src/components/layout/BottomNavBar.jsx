"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, HelpCircle, Info, MessageSquare } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const BottomNavBar = ({ hidden = false }) => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === "/") return "home";
    return pathname.replace("/", "");
  };

  const activeTab = getActiveTab();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="bottomnav"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className={clsx(
            "fixed w-full z-50",
            isMobile ? "bottom-0 left-0" : "bottom-6 left-1/2 -translate-x-1/2"
          )}
        >
          <div
            className={clsx(
              "fixed w-full z-50 transition-all duration-500 ease-in-out",
              isMobile
                ? "bottom-0 left-0"
                : "bottom-6 left-1/2 -translate-x-1/2",
              "transform"
            )}
          >
            <div
              className={clsx(
                "mx-auto border border-white/20 backdrop-blur-sm bg-black/50",
                "shadow-[0_8px_30px_rgba(0,0,0,0.6)]",
                isMobile ? "rounded-md" : "rounded-lg px-4 max-w-3xl",
                "transition-all duration-300 ease-in-out relative overflow-visible"
              )}
            >
              <div className="flex justify-around items-center py-3 px-2 relative">
                <NavItem
                  icon={<Home size={20} />}
                  label="Home"
                  isActive={activeTab === "home"}
                />
                <NavItem
                  icon={<HelpCircle size={20} />}
                  label="How"
                  isActive={activeTab === "how"}
                />
                <NavItem
                  icon={<Info size={20} />}
                  label="Why"
                  isActive={activeTab === "why"}
                />
                <NavItem
                  icon={<MessageSquare size={20} />}
                  label="What"
                  isActive={activeTab === "what"}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavItem = ({ icon, label, isActive }) => {
  const activeStyles = {
    text: "text-white",
    bg: "bg-white/10",
    ring: "ring-white/50",
  };

  const pageRoute =
    label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase()}`;

  return (
    <Link href={pageRoute} className="block w-full">
      <div
        className={clsx(
          "flex flex-col items-center group relative transition-all duration-300 ease-in-out",
          isActive ? activeStyles.text : "text-white/50"
        )}
      >
        <div
          className={clsx(
            "rounded-md p-2 transform transition-all duration-300 ease-in-out",
            isActive
              ? `${activeStyles.bg} -translate-y-3 scale-125 shadow-md ring-2 ${activeStyles.ring}`
              : "hover:-translate-y-1 group-hover:bg-white/10"
          )}
        >
          {icon}
        </div>
        <span
          className={clsx(
            "text-xs mt-1 transition-all duration-300 ease-in-out",
            isActive
              ? "font-medium text-white"
              : "opacity-70 group-hover:opacity-90"
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default BottomNavBar;
