"use client";

import { useState, useEffect } from "react";
import { OUTLETS, Outlet } from "@/data/cafeData";
import LaurelBranch from "./LaurelBranch";
import { MapPin, Phone, Calendar, Utensils, Music, Menu as MenuIcon, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  activeOutlet: Outlet;
  onSelectOutlet: (outlet: Outlet) => void;
  onOpenReservation: () => void;
}

export default function Navbar({ activeOutlet, onSelectOutlet, onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [outletDropdownOpen, setOutletDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-4 text-neutral-900 border-b border-neutral-100/80 shadow-xs"
          : "bg-neutral-950/90 text-white py-5 border-b border-neutral-900/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo & Monogram */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-xs font-bold tracking-wider transition-transform group-hover:scale-105 ${
              isScrolled
                ? "bg-neutral-950 text-white"
                : "bg-white text-neutral-950"
            }`}>
              B | T
            </div>
            <LaurelBranch className={`absolute -left-3 w-4 h-7 ${isScrolled ? "text-neutral-900" : "text-neutral-300"}`} />
            <LaurelBranch className={`absolute -right-3 w-4 h-7 ${isScrolled ? "text-neutral-900" : "text-neutral-300"}`} flip />
          </div>

          <div className="flex flex-col ml-1">
            <span className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold leading-none">
              BEAN THERE ??
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase opacity-60 font-light mt-1">
              Jaipur Outlets
            </span>
          </div>
        </a>

        {/* Desktop Active Outlet Dropdown */}
        <div className="hidden lg:flex items-center relative">
          <button
            onClick={() => setOutletDropdownOpen(!outletDropdownOpen)}
            className={`flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium px-4 py-1.5 rounded-full transition-all ${
              isScrolled
                ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                : "bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
            }`}
          >
            <MapPin className="w-3 h-3 opacity-60" />
            <span>{activeOutlet.area}</span>
            <ChevronDown className="w-3 h-3 opacity-40 ml-1" />
          </button>

          {/* Dropdown menu */}
          {outletDropdownOpen && (
            <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-neutral-100 p-2.5 text-neutral-900 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="text-[9px] font-semibold text-neutral-400 uppercase tracking-[0.2em] px-3 py-1.5 border-b border-neutral-100 mb-1">
                Select Cafe Branch
              </div>
              {OUTLETS.map((outlet) => (
                <button
                  key={outlet.id}
                  onClick={() => {
                    onSelectOutlet(outlet);
                    setOutletDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex flex-col gap-0.5 transition-colors ${
                    activeOutlet.id === outlet.id
                      ? "bg-neutral-950 text-white font-medium"
                      : "hover:bg-neutral-50 text-neutral-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="tracking-wide">{outlet.area}</span>
                    <span className="text-[10px] opacity-70">⭐ {outlet.googleRating}</span>
                  </div>
                  <span className="text-[10px] opacity-50 font-light line-clamp-1">{outlet.seatingVibe}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-light">
          <a
            href="#outlets"
            className={`transition-colors hover:opacity-100 opacity-70 ${
              isScrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            Outlets
          </a>
          <a
            href="#menu"
            className={`transition-colors hover:opacity-100 opacity-70 ${
              isScrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            Menu & Prices
          </a>
          <a
            href="#reviews"
            className={`transition-colors hover:opacity-100 opacity-70 ${
              isScrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            Talk of Town
          </a>
          <a
            href="#events"
            className={`transition-colors hover:opacity-100 opacity-70 ${
              isScrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            Jam Sessions
          </a>
        </nav>

        {/* CTA Button (Sleek Clean Premium Button) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${activeOutlet.phone}`}
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "text-neutral-800 hover:bg-neutral-100"
                : "text-neutral-200 hover:bg-neutral-900"
            }`}
            title="Call Cafe"
          >
            <Phone className="w-3.5 h-3.5 opacity-70" />
          </a>

          <button
            onClick={onOpenReservation}
            className={isScrolled ? "btn-premium-dark" : "btn-premium-light"}
          >
            Book Table
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${
            isScrolled ? "text-neutral-900" : "text-white"
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 px-6 pt-4 pb-8 text-neutral-900 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          
          <div className="mb-5 p-4 bg-neutral-50 rounded-2xl">
            <div className="text-[9px] font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Select Location:
            </div>
            <div className="grid grid-cols-1 gap-2">
              {OUTLETS.map((o) => (
                <button
                  key={o.id}
                  onClick={() => {
                    onSelectOutlet(o);
                  }}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs flex justify-between items-center ${
                    activeOutlet.id === o.id
                      ? "bg-neutral-950 text-white font-medium"
                      : "bg-white text-neutral-900 border border-neutral-100"
                  }`}
                >
                  <span>{o.area}</span>
                  <span className="text-[10px] opacity-70">⭐ {o.googleRating}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 font-sans text-xs tracking-[0.2em] uppercase font-light">
            <a
              href="#outlets"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-100 flex items-center justify-between"
            >
              <span>Outlets & Cabins</span>
              <span className="text-[10px] text-neutral-400">3 Locations</span>
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-100 flex items-center justify-between"
            >
              <span>Menu & Prices</span>
              <span className="text-[10px] text-neutral-400">Full Menu</span>
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-100 flex items-center justify-between"
            >
              <span>Talk of the Town</span>
              <span className="text-[10px] text-neutral-400">⭐ 4.4 Google</span>
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-neutral-100 flex items-center justify-between"
            >
              <span>Jam Sessions</span>
              <span className="text-[10px] text-neutral-400">Sat & Sun</span>
            </a>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full btn-premium-dark py-3.5 text-center block"
            >
              Book a Table Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
