import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Footer Links */}
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Terms And Condition
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Contact Us
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-slate-400 text-sm text-center md:text-right">
            Copyright © 2025{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Rainbow-Themes.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;