"use client";

import { useState } from "react";
import Image from "next/image";
import { OUTLETS, Outlet } from "@/data/cafeData";
import LaurelBranch from "./LaurelBranch";
import { MapPin, Phone, Star, Clock, ExternalLink, Calendar, Check } from "lucide-react";

interface OutletSectionProps {
  activeOutlet: Outlet;
  onSelectOutlet: (outlet: Outlet) => void;
  onOpenReservationForOutlet: (outlet: Outlet) => void;
}

export default function OutletSection({ activeOutlet, onSelectOutlet, onOpenReservationForOutlet }: OutletSectionProps) {
  const [selectedTab, setSelectedTab] = useState<string>(activeOutlet.id);

  const currentOutlet = OUTLETS.find((o) => o.id === selectedTab) || activeOutlet;

  return (
    <section id="outlets" className="py-28 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <LaurelBranch className="w-5 h-8 text-neutral-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
              Jaipur Cafe Locations
            </span>
            <LaurelBranch className="w-5 h-8 text-neutral-400" flip />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-sans tracking-tight font-light text-neutral-950">
            Explore <span className="font-extrabold uppercase">BEAN THERE ??</span> Cabins
          </h2>
          <p className="mt-3 text-sm text-neutral-500 font-light max-w-xl mx-auto leading-relaxed">
            3 grounded locations across Jaipur featuring open courtyard gravel floors, raw wooden frame chairs, and private bamboo cabins.
          </p>
        </div>

        {/* Outlet Switcher Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {OUTLETS.map((outlet) => {
            const isSelected = selectedTab === outlet.id;
            return (
              <button
                key={outlet.id}
                onClick={() => {
                  setSelectedTab(outlet.id);
                  onSelectOutlet(outlet);
                }}
                className={`px-6 py-3 rounded-full text-xs tracking-[0.15em] uppercase transition-all flex items-center gap-3 ${
                  isSelected
                    ? "bg-neutral-950 text-white shadow-lg font-medium"
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 opacity-70" />
                <span>{outlet.area}</span>
                <span className="text-[10px] opacity-60">⭐ {outlet.googleRating}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Outlet Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-neutral-50/60 p-8 sm:p-12 rounded-3xl">
          
          {/* Left Column: Outlet Photo & Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
              <Image
                src={currentOutlet.image}
                alt={currentOutlet.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-neutral-950/90 text-white text-[10px] uppercase tracking-widest font-mono px-3 py-1 rounded-full border border-neutral-800">
                ⭐ {currentOutlet.googleRating} Rating ({currentOutlet.totalReviews}+ reviews)
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-3">
              {currentOutlet.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-xs border border-neutral-200">
                  <Image src={img} alt={`${currentOutlet.name} interior ${idx+1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Outlet Details & Booking */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-neutral-900">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-1">
                {currentOutlet.area} Branch
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans tracking-tight font-extrabold text-neutral-950 uppercase">
                {currentOutlet.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-3 italic font-serif leading-relaxed border-l-2 border-neutral-950 pl-4 py-1">
                "{currentOutlet.tagline}"
              </p>
            </div>

            {/* Address & Hours */}
            <div className="space-y-3.5 text-xs text-neutral-700 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-neutral-950">Address: </span>
                  <span>{currentOutlet.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-neutral-950 shrink-0" />
                <div>
                  <span className="font-medium text-neutral-950">Operating Hours: </span>
                  <span>{currentOutlet.timing}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-950 shrink-0" />
                <div>
                  <span className="font-medium text-neutral-950">Direct Desk: </span>
                  <a href={`tel:${currentOutlet.phone}`} className="text-neutral-950 hover:underline font-medium">
                    {currentOutlet.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Seating Zones List */}
            <div>
              <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-2.5">
                Seating Ambience Pods:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentOutlet.zones.map((zone, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-light px-3 py-1 rounded-full bg-white text-neutral-800 border border-neutral-200 flex items-center gap-1.5"
                  >
                    <Check className="w-3 h-3 text-neutral-950" />
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (Clean & Premium) */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-6">
              <button
                onClick={() => onOpenReservationForOutlet(currentOutlet)}
                className="btn-premium-dark flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Table at {currentOutlet.area}</span>
              </button>

              <a
                href={currentOutlet.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-link-minimal flex items-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Google Maps Location</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
