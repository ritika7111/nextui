import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toolsMenuItems = [
    { name: "Text Generator", href: "#" },
    { name: "Image Generator", href: "#" },
    { name: "Code Generator", href: "#" },
    { name: "Image Editor", href: "#" },
    { name: "Video Generator", href: "#" },
    { name: "Email Generator", href: "#" },
    { name: "Audio Generator", href: "#", coming: true },
    { name: "Edu.feedback", href: "#", coming: true },
    { name: "Website Generator", href: "#", coming: true },
  ];

  const pagesMenuItems = [
    {
      category: "Inner Pages",
      items: [
        { name: "Style Guide", href: "#", hot: true },
        { name: "Blog", href: "#" },
        { name: "Blog Details", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Sign In", href: "#" },
        { name: "Sign Up", href: "#" },
        { name: "Team", href: "#" },
        { name: "Terms & Policy", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ]
    },
    {
      category: "Dashboard Pages",
      items: [
        { name: "Profile", href: "#" },
        { name: "Notification", href: "#" },
        { name: "Chat Export", href: "#" },
        { name: "Appearance", href: "#" },
        { name: "Plans and Billing", href: "#" },
        { name: "Sessions", href: "#" },
        { name: "Application", href: "#" },
        { name: "Release notes", href: "#" },
        { name: "Help & FAQs", href: "#" },
      ]
    }
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
            </div>
            <span className="text-xl font-bold text-white">AiWave</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-purple-400 transition-colors"
                onClick={() => setOpenDropdown(openDropdown === 'tools' ? null : 'tools')}
                onMouseEnter={() => setOpenDropdown('tools')}
              >
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'tools' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  {toolsMenuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                    >
                      {item.name}
                      {item.coming && <span className="ml-2 text-xs text-purple-400">Coming</span>}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-purple-400 transition-colors"
                onClick={() => setOpenDropdown(openDropdown === 'pages' ? null : 'pages')}
              >
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'pages' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4">
                  {pagesMenuItems.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-4 last:mb-0">
                      <h4 className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
                        {category.category}
                      </h4>
                      {category.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                        >
                          {item.name}
                          {item.hot && <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded">Hot</span>}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="text-white hover:text-purple-400 transition-colors">Roadmap</a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">How to use</a>
          </nav>

          {/* Get Started Button */}
          <div className="hidden lg:block">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Tools</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Pages</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Roadmap</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">How to use</a>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 w-fit">
                Get Started Free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;