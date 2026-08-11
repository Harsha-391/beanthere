"use client";

import { REVIEWS, INSTAGRAM_REELS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/cafeData";
import LaurelBranch from "./LaurelBranch";
import { Star, ExternalLink, Quote, Instagram } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-28 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <LaurelBranch className="w-5 h-8 text-neutral-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
              Live Social Reels & Aggregated Mentions
            </span>
            <LaurelBranch className="w-5 h-8 text-neutral-400" flip />
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans tracking-tight font-light text-neutral-950">
            Talk of the Town — <span className="font-extrabold uppercase">What Jaipur Says</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-500 font-light max-w-xl mx-auto leading-relaxed">
            Live Instagram Reels directly embedded from our official handle <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="underline font-medium text-neutral-950">{INSTAGRAM_HANDLE}</a> alongside customer reviews.
          </p>
        </div>

        {/* Rating Stats Summary */}
        <div className="max-w-4xl mx-auto mb-20 p-8 rounded-3xl bg-neutral-50/70 border border-neutral-100 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="border-r border-neutral-200/60 last:border-none">
            <div className="text-3xl font-extrabold text-neutral-950 font-mono flex items-center justify-center gap-1">
              <span>4.4</span>
              <Star className="w-4 h-4 text-neutral-950 fill-neutral-950" />
            </div>
            <div className="text-[10px] text-neutral-500 font-semibold uppercase tracking-[0.2em] mt-1.5">Google Score</div>
            <div className="text-[10px] text-neutral-400 font-light mt-0.5">850+ Verified Ratings</div>
          </div>

          <div className="border-r border-neutral-200/60 last:border-none">
            <div className="text-3xl font-extrabold text-neutral-950 font-mono flex items-center justify-center gap-1">
              <span>4.3</span>
              <Star className="w-4 h-4 text-neutral-950 fill-neutral-950" />
            </div>
            <div className="text-[10px] text-neutral-500 font-semibold uppercase tracking-[0.2em] mt-1.5">Zomato Rating</div>
            <div className="text-[10px] text-neutral-400 font-light mt-0.5">Popular Cafe Chain</div>
          </div>

          <div className="border-r border-neutral-200/60 last:border-none">
            <div className="text-3xl font-extrabold text-neutral-950 font-mono flex items-center justify-center gap-1">
              <span>4.5</span>
              <Star className="w-4 h-4 text-neutral-950 fill-neutral-950" />
            </div>
            <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-[0.2em] mt-1.5">Justdial Score</div>
            <div className="text-[10px] text-neutral-400 font-light mt-0.5">Student Favorite</div>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-neutral-950 font-mono">
              45K+
            </div>
            <div className="text-[10px] text-neutral-500 font-semibold uppercase tracking-[0.2em] mt-1.5">Instagram Views</div>
            <div className="text-[10px] text-neutral-400 font-light mt-0.5">{INSTAGRAM_HANDLE}</div>
          </div>

        </div>

        {/* Live Instagram Reel Video Embed Showcase */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10 border-b border-neutral-100 pb-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-950 flex items-center gap-2">
              <Instagram className="w-4 h-4 text-neutral-950" />
              Live Instagram Reels from {INSTAGRAM_HANDLE}
            </h3>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-link-minimal text-[10px]"
            >
              Follow on Instagram &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSTAGRAM_REELS.map((reel) => (
              <div
                key={reel.id}
                className="bg-neutral-50 p-4 sm:p-5 rounded-3xl border border-neutral-200/80 shadow-xs flex flex-col justify-between"
              >
                <div className="text-center mb-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-mono font-semibold">
                    {reel.author}
                  </span>
                  <h4 className="text-xs font-semibold text-neutral-950 uppercase tracking-wide mt-1">
                    {reel.title}
                  </h4>
                </div>

                {/* Direct Live Instagram Reel Video iFrame Embed Player */}
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-950 shadow-inner">
                  <iframe
                    src={reel.embedUrl}
                    title={reel.title}
                    className="w-full h-full rounded-2xl border-0"
                    allowTransparency={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    scrolling="no"
                  />
                </div>

                <div className="mt-4 pt-3 text-center border-t border-neutral-200/60 space-y-2">
                  <p className="text-[11px] text-neutral-600 font-light italic leading-relaxed">
                    "{reel.caption}"
                  </p>
                  <div>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-link-minimal text-[10px] inline-flex items-center gap-1 text-neutral-950"
                    >
                      <span>Watch Reel on Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Review Cards Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-neutral-100 pb-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-950 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
              Verified Customer Reviews Across Platforms
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-neutral-50/50 p-7 rounded-3xl border border-neutral-100 flex flex-col justify-between"
              >
                <div>
                  {/* Source Badge & Rating */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white text-neutral-950 border border-neutral-200/60 shadow-2xs">
                      {rev.source}
                    </span>

                    <div className="flex items-center gap-0.5 text-neutral-950">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(rev.rating)
                              ? "fill-neutral-950 text-neutral-950"
                              : "text-neutral-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Quote className="w-5 h-5 text-neutral-300 mb-2" />

                  <p className="text-xs text-neutral-600 leading-relaxed font-light italic font-serif">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-neutral-200/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-950 text-white font-mono text-xs font-bold flex items-center justify-center">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-950">{rev.author}</div>
                      <div className="text-[10px] text-neutral-400 font-light">{rev.date}</div>
                    </div>
                  </div>

                  {rev.outletName && (
                    <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase">
                      {rev.tag || "Verified Visit"}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
