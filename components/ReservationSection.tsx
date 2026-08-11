"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { OUTLETS, Outlet } from "@/data/cafeData";
import { Calendar, MapPin, CheckCircle, Sparkles, X, Phone, User, MessageSquare, AlertCircle } from "lucide-react";

interface ReservationSectionProps {
  isOpen: boolean;
  initialOutlet: Outlet;
  onClose: () => void;
}

export default function ReservationSection({ isOpen, initialOutlet, onClose }: ReservationSectionProps) {
  const [selectedOutletId, setSelectedOutletId] = useState<string>(initialOutlet.id);
  const [selectedZone, setSelectedZone] = useState<string>(initialOutlet.zones[0] || "Bamboo Pod");
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("06:30 PM");
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [specialNote, setSpecialNote] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmationData, setConfirmationData] = useState<any | null>(null);

  useEffect(() => {
    setSelectedOutletId(initialOutlet.id);
    if (initialOutlet.zones && initialOutlet.zones.length > 0) {
      setSelectedZone(initialOutlet.zones[0]);
    }
  }, [initialOutlet]);

  const currentOutlet = OUTLETS.find((o) => o.id === selectedOutletId) || initialOutlet;

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleOutletChange = (outletId: string) => {
    setSelectedOutletId(outletId);
    const target = OUTLETS.find((o) => o.id === outletId);
    if (target && target.zones.length > 0) {
      setSelectedZone(target.zones[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !phone || !date) {
      alert("Please fill in your name, phone number, and reservation date.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const bookingId = `BTC-${Math.floor(100000 + Math.random() * 900000)}`;
      const payload = {
        bookingId,
        outletName: currentOutlet.name,
        area: currentOutlet.area,
        zone: selectedZone,
        date,
        timeSlot,
        guests,
        guestName,
        phone,
        specialNote,
      };
      setConfirmationData(payload);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // fallback
      }
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-neutral-100 shadow-2xl text-neutral-900 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-neutral-950 text-white p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-1">
            <Calendar className="w-3.5 h-3.5" /> Instant Table Reservation
          </div>
          <h3 className="text-2xl font-extrabold tracking-wide uppercase text-white">
            BEAN THERE ?? Table Booking
          </h3>
          <p className="text-xs text-neutral-400 font-light mt-1">
            Select your preferred Jaipur branch and private bamboo cabin or pebble courtyard seating.
          </p>
        </div>

        {/* Confirmation State View */}
        {confirmationData ? (
          <div className="p-8 space-y-6 text-center">
            
            <div className="w-14 h-14 rounded-full bg-neutral-950 text-white flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">
                Booking Confirmed!
              </span>
              <h4 className="text-2xl font-extrabold uppercase text-neutral-950 mt-1">
                Table Reserved for {confirmationData.guestName}
              </h4>
              <p className="text-xs text-neutral-500 font-light mt-1">
                Booking ID: <span className="font-mono font-bold text-neutral-950 bg-neutral-100 px-2 py-0.5 rounded">{confirmationData.bookingId}</span>
              </p>
            </div>

            {/* Receipt Box */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-neutral-200/60 pb-2">
                <span className="text-neutral-500 font-light">Outlet:</span>
                <span className="font-semibold text-neutral-950">{confirmationData.outletName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-2">
                <span className="text-neutral-500 font-light">Seating Pod:</span>
                <span className="font-semibold text-neutral-950">{confirmationData.zone}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-2">
                <span className="text-neutral-500 font-light">Date & Time:</span>
                <span className="font-semibold text-neutral-950">{confirmationData.date} @ {confirmationData.timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-2">
                <span className="text-neutral-500 font-light">Guest Count:</span>
                <span className="font-semibold text-neutral-950">{confirmationData.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-light">Contact Phone:</span>
                <span className="font-semibold text-neutral-950">{confirmationData.phone}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-100 text-xs text-neutral-600 font-light flex items-center gap-2 text-left">
              <AlertCircle className="w-4 h-4 text-neutral-950 shrink-0" />
              <span>A confirmation SMS preview has been generated. Please arrive 10 minutes prior to your slot.</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="btn-premium-dark w-full py-3.5 text-center block text-[10px]"
              >
                Done & Return
              </button>
            </div>

          </div>
        ) : (
          /* Reservation Form */
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Step 1: Select Outlet */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-950" /> 1. Select Jaipur Branch:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {OUTLETS.map((o) => (
                  <button
                    type="button"
                    key={o.id}
                    onClick={() => handleOutletChange(o.id)}
                    className={`p-3.5 rounded-2xl text-left text-xs transition-all ${
                      selectedOutletId === o.id
                        ? "bg-neutral-950 text-white font-medium shadow-sm"
                        : "bg-neutral-50 text-neutral-800 hover:bg-neutral-100"
                    }`}
                  >
                    <div className="font-semibold uppercase tracking-wider">{o.area}</div>
                    <div className={`text-[10px] ${selectedOutletId === o.id ? "text-neutral-300" : "text-neutral-500"}`}>
                      ⭐ {o.googleRating}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Seating Zone */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-neutral-950" /> 2. Preferred Seating Pod:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {currentOutlet.zones.map((zone) => (
                  <button
                    type="button"
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    className={`p-3 rounded-2xl text-xs font-light text-center transition-all ${
                      selectedZone === zone
                        ? "bg-neutral-950 text-white font-medium"
                        : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Date, Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 text-xs font-mono text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 text-xs font-mono text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                >
                  <option value="11:30 AM">11:30 AM (Lunch)</option>
                  <option value="01:30 PM">01:30 PM</option>
                  <option value="04:00 PM">04:00 PM (Tea/Coffee)</option>
                  <option value="06:30 PM">06:30 PM (Sunset / Jam)</option>
                  <option value="08:30 PM">08:30 PM (Dinner)</option>
                  <option value="09:45 PM">09:45 PM (Late Evening)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 text-xs font-mono text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 text-xs text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98290 12345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 text-xs text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                />
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1 flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" /> Special Request (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Birthday setup, study pod, near acoustic stage..."
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-50 text-xs text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium-dark w-full py-4 text-center block text-[10px]"
              >
                {isSubmitting ? "Securing Table..." : "Confirm Free Reservation"}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
