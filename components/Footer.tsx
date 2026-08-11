"use client";

import { OUTLETS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/cafeData";
import LaurelBranch from "./LaurelBranch";
import { MapPin, Phone, Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-20 pb-16 border-t border-neutral-900 relative">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center font-serif text-xs font-bold tracking-wider">
                B | T
              </div>
              <div>
                <div className="font-sans text-xs tracking-[0.25em] font-semibold uppercase text-white leading-none">
                  BEAN THERE ??
                </div>
                <div className="text-[9px] text-neutral-400 tracking-[0.2em] uppercase mt-1">
                  Jaipur Outlets & Cabins
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              A grounded, open-air cafe chain in Jaipur. Small stones on the ground, raw wooden frame chairs, and private bamboo cabins.
            </p>

            <div className="flex items-center gap-4 text-xs pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noreferrer"
                className="btn-link-minimal text-white flex items-center gap-1.5 text-[10px]"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Outlets List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] font-semibold text-white uppercase tracking-[0.25em] mb-2">
              Our Jaipur Outlets
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {OUTLETS.map((o) => (
                <div key={o.id} className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-900 space-y-1">
                  <div className="font-semibold text-white flex items-center justify-between uppercase tracking-wider text-[11px]">
                    <span>{o.area}</span>
                    <span className="text-[10px] text-neutral-400">⭐ {o.googleRating}</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 font-light line-clamp-1">{o.seatingVibe}</div>
                  <div className="text-[10px] text-neutral-400 font-mono pt-1">{o.timing}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="lg:col-span-3 space-y-4 text-xs font-light">
            <div className="text-[10px] font-semibold text-white uppercase tracking-[0.25em] mb-2">
              Quick Links
            </div>

            <ul className="space-y-2.5 text-neutral-400 uppercase tracking-widest text-[10px]">
              <li><a href="#outlets" className="hover:text-white transition-colors">Locations & Cabins</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu & Authentic Prices</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Talk of the Town Reviews</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Weekend Acoustic Jamming</a></li>
            </ul>

            <div className="pt-2 text-[10px] text-neutral-400 font-mono">
              Cost for 2: Approx ₹500
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <div>
            © {new Date().getFullYear()} BEAN THERE ?? ({INSTAGRAM_HANDLE}). All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest">
            <span>Crafted for cafe lovers in Jaipur</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
