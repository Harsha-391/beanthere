"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OutletSection from "@/components/OutletSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import ReservationSection from "@/components/ReservationSection";
import { OUTLETS, Outlet } from "@/data/cafeData";

export default function Home() {
  const [activeOutlet, setActiveOutlet] = useState<Outlet>(OUTLETS[0]);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#241B14]">
      {/* Top Navbar */}
      <Navbar
        activeOutlet={activeOutlet}
        onSelectOutlet={setActiveOutlet}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        activeOutlet={activeOutlet}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Outlets Section */}
      <OutletSection
        activeOutlet={activeOutlet}
        onSelectOutlet={setActiveOutlet}
        onOpenReservationForOutlet={(outlet) => {
          setActiveOutlet(outlet);
          setIsReservationOpen(true);
        }}
      />

      {/* Interactive Full Menu Section */}
      <MenuSection />

      {/* Talk of the Town - Social Reviews & Reels */}
      <ReviewsSection />

      {/* Live Weekend Jamming & Open Mic */}
      <EventsSection />

      {/* Footer */}
      <Footer />

      {/* Table Reservation Modal */}
      <ReservationSection
        isOpen={isReservationOpen}
        initialOutlet={activeOutlet}
        onClose={() => setIsReservationOpen(false)}
      />
    </main>
  );
}
