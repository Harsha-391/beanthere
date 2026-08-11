"use client";

import Image from "next/image";
import { Outlet } from "@/data/cafeData";
import LaurelBranch, { LaurelWreath } from "./LaurelBranch";
import { MapPin, Star, Calendar, Music, Coffee, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  activeOutlet: Outlet;
  onOpenReservation: () => void;
}

export default function HeroSection({ activeOutlet, onOpenReservation }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 bg-neutral-950 text-white overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-900/60 font-serif text-[320px] font-bold select-none opacity-20 pointer-events-none tracking-widest">
        B | T
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Hero Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-center sm:text-left">
          
          {/* Top Laurel & Outlet Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] bg-white/10 text-neutral-200 font-medium backdrop-blur-sm">
              Open Air Courtyard & Cabins
            </span>

            <span className="px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase bg-neutral-900/80 text-neutral-300 flex items-center gap-1.5">
              <Star className="w-3 h-3 text-white fill-white" />
              <span>{activeOutlet.googleRating} Rating</span>
              <span className="text-neutral-500">({activeOutlet.totalReviews}+ reviews)</span>
            </span>

            <span className="px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase bg-neutral-900/80 text-neutral-300 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-neutral-400" />
              <span>{activeOutlet.area}</span>
            </span>
          </div>

          {/* Title & Editorial Subtitle */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center sm:justify-start text-neutral-400 text-[11px] uppercase tracking-[0.3em] font-light">
              <LaurelBranch className="w-5 h-8 text-neutral-600 hidden sm:block" />
              <span>Jaipur Cafe Chain</span>
              <LaurelBranch className="w-5 h-8 text-neutral-600 hidden sm:block" flip />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans tracking-tight font-light leading-[1.05]">
              <span className="font-extrabold tracking-[0.12em] block uppercase text-white">
                BEAN THERE ??
              </span>
              <span className="text-2xl sm:text-4xl lg:text-5xl text-neutral-400 font-serif italic mt-2 block font-normal">
                Acoustics, Cold Brews & Cobblestone Pods
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-light leading-relaxed pt-2">
              Step onto small stones, sink into raw wooden frame chairs, and unwind behind private bamboo partitions. Serving handcrafted Hazelnut Cold Brews & wood-grilled toasties across 3 outlets in Jaipur.
            </p>
          </div>

          {/* Clean Premium Action Buttons (No Heavy Bold Borders) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-3">
            <button
              onClick={onOpenReservation}
              className="btn-premium-light flex items-center gap-2 group"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table at {activeOutlet.area}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#menu"
              className="btn-link-minimal text-white flex items-center gap-2"
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>Browse Full Menu</span>
            </a>
          </div>

          {/* Clean Jamming Session Notice */}
          <div className="pt-4 border-t border-neutral-900 flex items-center gap-3 text-left">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <div className="text-xs text-neutral-400 font-light">
              <span className="font-medium text-white uppercase tracking-wider text-[11px] mr-1">Weekend Jam:</span>
              Acoustic Unplugged Night this Saturday, 6:30 PM at Pratap Nagar.
            </div>
            <a href="#events" className="text-xs text-neutral-200 underline hover:text-white whitespace-nowrap ml-auto font-medium">
              View Lineup &rarr;
            </a>
          </div>

        </div>

        {/* Right Hero Visual: Authentic Indian Cafe & Cold Brew Photo Pair */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          <div className="relative w-full max-w-md">
            
            {/* Main Indian Cafe Ambiance Photo */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
              <Image
                src={activeOutlet.image}
                alt={activeOutlet.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 filter contrast-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-mono">
                  {activeOutlet.area}
                </div>
                <div className="text-base font-serif font-semibold text-white tracking-wide">
                  {activeOutlet.seatingVibe}
                </div>
              </div>
            </div>

            {/* Overlapping Floating Menu Dish Photo (Cold Brew / Toastie) */}
            <div className="absolute -bottom-6 -left-6 w-36 sm:w-44 aspect-square rounded-2xl overflow-hidden border-2 border-neutral-950 shadow-2xl hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
                alt="Signature Hazelnut Cold Coffee"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-mono text-center bg-black/60 backdrop-blur-sm py-1 rounded">
                Hazelnut Cold Brew
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
