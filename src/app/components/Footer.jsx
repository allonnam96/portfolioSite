import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href="/">
          <img
            src="/_util/Logo/Logo.png" // Directly reference the logo from the public directory
            alt="Logo"
            className="w-6 h-6 md:w-10 md:h-10 cursor-pointer"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
