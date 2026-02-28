import React from "react";
import {
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-full px-4">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md px-4 md:px-10 py-3 rounded-full flex items-center justify-between shadow-lg">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="logo.png"
            alt="Fixify Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />

          <div className="leading-tight hidden sm:block">
            <div className="text-lg md:text-xl font-black text-slate-900">
              FIXIFY
            </div>
            <div className="text-xs md:text-sm text-slate-500">
              At your service
            </div>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            to="/"
            className="text-xs md:text-sm font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Services
          </Link>

          <Link
            to="/reviews"
            className="text-xs md:text-sm font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Reviews
          </Link>

          <a
            href="https://wa.me/919130804848?text=Hello%20I%20want%20to%20book%20a%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 md:px-5 py-2 text-xs md:text-sm rounded-full hover:bg-blue-700 transition"
          >
            Book Service
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-slate-400">
          <a
            href="https://www.instagram.com/fixify_atyourservice?igsh=NTVpb21ocXpxZXBt"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} className="hover:text-pink-500" />
          </a>

          <a
            href="https://www.facebook.com/share/1FnVSgXz7Q/"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size={18} className="hover:text-blue-600" />
          </a>

          <a
            href="https://wa.me/919130804848"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} className="hover:text-green-500" />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;