"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "@/data/cafeData";
import LaurelBranch from "./LaurelBranch";
import { Search, Utensils, Flame, Sparkles, Check, Plus, Minus, ShoppingBag, Info, Filter, ChevronDown } from "lucide-react";

const INITIAL_VISIBLE_COUNT_MOBILE = 4;
const INITIAL_VISIBLE_COUNT_DESKTOP = 6;
const LOAD_MORE_STEP = 6;

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Items");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [jainFilter, setJainFilter] = useState<boolean>(false);
  const [orderItems, setOrderItems] = useState<{ [id: string]: number }>({});
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT_DESKTOP);

  // Set initial visible count based on screen size on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setVisibleCount(INITIAL_VISIBLE_COUNT_MOBILE);
    }
  }, []);

  // Reset visible count whenever category, search, or jain filter changes
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    setVisibleCount(isMobile ? INITIAL_VISIBLE_COUNT_MOBILE : INITIAL_VISIBLE_COUNT_DESKTOP);
  }, [selectedCategory, searchQuery, jainFilter]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Items" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesJain = !jainFilter || item.isJainAvailable;
      return matchesCategory && matchesSearch && matchesJain;
    });
  }, [selectedCategory, searchQuery, jainFilter]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMoreItems = filteredItems.length > visibleCount;
  const remainingCount = filteredItems.length - visibleCount;

  const handleAddItem = (id: string) => {
    setOrderItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemoveItem = (id: string) => {
    setOrderItems((prev) => {
      const nextCount = (prev[id] || 0) - 1;
      if (nextCount <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: nextCount };
    });
  };

  const totalEstimate = useMemo(() => {
    return Object.entries(orderItems).reduce((sum, [id, count]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      return sum + (item ? item.price * count : 0);
    }, 0);
  }, [orderItems]);

  const totalItemCount = useMemo(() => {
    return Object.values(orderItems).reduce((a, b) => a + b, 0);
  }, [orderItems]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-neutral-50/50 relative border-y border-neutral-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <LaurelBranch className="w-5 h-8 text-neutral-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
              Authentic Indian Cafe Menu
            </span>
            <LaurelBranch className="w-5 h-8 text-neutral-400" flip />
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans tracking-tight font-light text-neutral-950">
            Full Menu & <span className="font-extrabold uppercase">Jaipur Prices</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-light max-w-xl mx-auto leading-relaxed">
            Transparent pricing, generous portions, and 100% vegetarian culinary creations prepared fresh across all BEAN THERE ?? branches.
          </p>
        </div>

        {/* Search & Category Navigation */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          
          {/* Search Bar & Jain Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search cold coffee, alfredo pasta, toasties, waffles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-neutral-200/80 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-500 hover:text-neutral-900"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Jain Filter Toggle */}
            <button
              onClick={() => setJainFilter(!jainFilter)}
              className={`w-full sm:w-auto px-5 py-3 rounded-full text-[11px] tracking-[0.15em] uppercase transition-all shrink-0 flex items-center justify-center gap-2 ${
                jainFilter
                  ? "bg-neutral-950 text-white font-medium"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Jain Only</span>
              {jainFilter && <Check className="w-3.5 h-3.5" />}
            </button>

          </div>

          {/* Category Pills Container: Clean Non-Clipping Horizontal Scroll with Inner Padding */}
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-2.5 overflow-x-auto py-3 px-1 scrollbar-none snap-x snap-mandatory touch-pan-x">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase whitespace-nowrap shrink-0 snap-start transition-all ${
                      isActive
                        ? "bg-neutral-950 text-white font-medium shadow-sm"
                        : "bg-white text-neutral-600 border border-neutral-200/70 hover:text-neutral-900 hover:bg-neutral-100"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-neutral-100 p-8">
            <Info className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">No Menu Items Found</h3>
            <p className="text-xs text-neutral-400 font-light mt-1">Try clearing search filters.</p>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleItems.map((item) => {
                const countInCart = orderItems[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100/80 flex flex-col justify-between hover:shadow-md transition-shadow group"
                  >
                    <div>
                      {/* Dish Photo */}
                      {item.image && (
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                            {item.isChefSpecial && (
                              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full bg-neutral-950 text-white">
                                Chef Special
                              </span>
                            )}
                            {item.isPopular && (
                              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-950 shadow-xs">
                                Bestseller
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Dish Details & Price */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-sans font-semibold text-sm tracking-wide text-neutral-950 uppercase group-hover:text-neutral-700 transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-sm font-extrabold text-neutral-950 font-mono shrink-0">
                            ₹{item.price}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="text-[10px] text-neutral-400 font-light">
                        {item.spiceLevel ? (
                          <span>🌶️ {"Spicy ".repeat(item.spiceLevel)}</span>
                        ) : (
                          <span>Mild & Fresh</span>
                        )}
                      </div>

                      {/* Quantity Add Counter */}
                      {countInCart > 0 ? (
                        <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-2.5 py-1">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="w-5 h-5 rounded-full bg-white text-neutral-950 text-xs font-bold flex items-center justify-center hover:bg-neutral-950 hover:text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold text-neutral-950 px-1">
                            {countInCart}
                          </span>
                          <button
                            onClick={() => handleAddItem(item.id)}
                            className="w-5 h-5 rounded-full bg-neutral-950 text-white text-xs font-bold flex items-center justify-center hover:bg-neutral-800 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddItem(item.id)}
                          className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-950 bg-neutral-100 hover:bg-neutral-950 hover:text-white px-4 py-1.5 rounded-full transition-all"
                        >
                          + Add to Visit
                        </button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Show More / Lazy Loading Button */}
            {hasMoreItems && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
                  className="btn-premium-dark inline-flex items-center gap-2 py-3 px-8 text-[11px]"
                >
                  <span>Show More Menu Items ({remainingCount} Remaining)</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Floating Order Calculator / Estimate Bar */}
      {totalItemCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-md w-[92%] bg-neutral-950 text-white p-4 rounded-full shadow-2xl flex items-center justify-between animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-3.5 pl-2">
            <div className="w-8 h-8 rounded-full bg-white text-neutral-950 font-mono font-bold text-xs flex items-center justify-center">
              {totalItemCount}
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-light">Estimated Visit Total</div>
              <div className="text-sm font-extrabold text-white font-mono">₹{totalEstimate}</div>
            </div>
          </div>

          <a
            href="#outlets"
            className="btn-premium-light text-[10px] py-2.5 px-5 flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Select Branch</span>
          </a>
        </div>
      )}

    </section>
  );
}
