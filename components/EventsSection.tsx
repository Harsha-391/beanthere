"use client";

import { useState } from "react";
import Image from "next/image";
import { JAM_EVENTS, JamEvent } from "@/data/cafeData";
import LaurelBranch from "./LaurelBranch";
import { Music, Calendar, Clock, MapPin, Mic, Sparkles, CheckCircle, X, Send } from "lucide-react";

export default function EventsSection() {
  const [performerModalOpen, setPerformerModalOpen] = useState<boolean>(false);
  const [performerName, setPerformerName] = useState<string>("");
  const [talentType, setTalentType] = useState<string>("Acoustic Guitar / Vocals");
  const [contact, setContact] = useState<string>("");
  const [sampleLink, setSampleLink] = useState<string>("");
  const [registeredSuccess, setRegisteredSuccess] = useState<boolean>(false);

  const handlePerformerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!performerName || !contact) {
      alert("Please provide your name and contact info.");
      return;
    }
    setRegisteredSuccess(true);
  };

  return (
    <section id="events" className="py-28 bg-neutral-950 text-white relative border-t border-neutral-900 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <LaurelBranch className="w-5 h-8 text-neutral-600" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
              Weekend Acoustic Unplugged
            </span>
            <LaurelBranch className="w-5 h-8 text-neutral-600" flip />
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans tracking-tight font-light text-white">
            Live Jamming <span className="font-extrabold uppercase">Under the Stars</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            Join us every weekend on our open-air courtyard floor. Raw acoustic guitars, cajon rhythms, and open mic slots for local Jaipur indie talent.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {JAM_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-neutral-900/80 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col justify-between hover:border-neutral-600 transition-all group"
            >
              <div>
                {/* Event Photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 bg-neutral-950/90 text-white text-[10px] uppercase tracking-widest font-mono px-3.5 py-1 rounded-full border border-neutral-800">
                    {event.day} • {event.time}
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-semibold text-neutral-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-white" /> {event.outlet}
                  </div>
                  
                  <h3 className="text-base font-bold text-white tracking-wide uppercase">
                    {event.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-3 text-xs space-y-1.5 border-t border-neutral-800/80 font-light">
                    <div className="text-neutral-300 flex items-center gap-1.5">
                      <Mic className="w-3.5 h-3.5 text-white" />
                      <span className="font-semibold text-white">Lineup:</span> {event.performer}
                    </div>
                    <div className="text-neutral-400">
                      <span className="font-semibold text-neutral-300">Genre:</span> {event.genre}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#outlets"
                  className="btn-premium-light w-full py-3 text-center block text-[10px]"
                >
                  Book Courtyard Pod
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Performer Registration Callout */}
        <div className="p-10 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.2em]">
              <Mic className="w-4 h-4 text-white" /> Are You an Indie Musician or Poet in Jaipur?
            </div>
            <h3 className="text-2xl font-extrabold uppercase text-white tracking-wide">
              Perform Live at BEAN THERE ??
            </h3>
            <p className="text-xs text-neutral-400 font-light max-w-xl leading-relaxed">
              We provide free acoustic slots, microphone setup, cajon, and complimentary hazelnut cold brews for performing artists.
            </p>
          </div>

          <button
            onClick={() => {
              setRegisteredSuccess(false);
              setPerformerModalOpen(true);
            }}
            className="btn-premium-light text-[10px] shrink-0"
          >
            Apply for Slot
          </button>
        </div>

      </div>

      {/* Performer Signup Modal */}
      {performerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-neutral-950 rounded-3xl border border-neutral-800 text-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setPerformerModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {registeredSuccess ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle className="w-12 h-12 text-white mx-auto" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Application Received!</h4>
                <p className="text-xs text-neutral-400 font-light">
                  Thank you, <span className="text-white font-semibold">{performerName}</span>! Our event curator will contact you via WhatsApp.
                </p>
                <button
                  onClick={() => setPerformerModalOpen(false)}
                  className="btn-premium-light w-full py-3 text-center block text-[10px] mt-4"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handlePerformerSubmit} className="space-y-4">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    Open Mic Registration
                  </div>
                  <h4 className="text-lg font-extrabold uppercase text-white">
                    Showcase Your Talent
                  </h4>
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1 font-light">
                    Your Name / Band Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Yash Vardhan"
                    value={performerName}
                    onChange={(e) => setPerformerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1 font-light">
                    Talent Format
                  </label>
                  <select
                    value={talentType}
                    onChange={(e) => setTalentType(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="Acoustic Guitar / Vocals">Acoustic Guitar & Vocals</option>
                    <option value="Spoken Word / Hindi Poetry">Spoken Word / Hindi Poetry</option>
                    <option value="Flute / Keyboard Unplugged">Flute / Keyboard Unplugged</option>
                    <option value="Stand-up Comedy">Stand-up Comedy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1 font-light">
                    WhatsApp Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98290 12345"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1 font-light">
                    Instagram Handle or Audio Link (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. @yash_acoustic"
                    value={sampleLink}
                    onChange={(e) => setSampleLink(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-premium-light w-full py-3.5 text-center block text-[10px]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
