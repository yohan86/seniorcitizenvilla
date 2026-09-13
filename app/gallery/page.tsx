"use client";

import React, { useState } from "react";
import GalleryModal, { EventAlbum } from "../components/GalleryModal";
import Image from "next/image";
import Link from "next/link";

const ALBUMS_DATA: EventAlbum[] = [
  {
    id: "avurudu-2026",
    title: "Aluth Avurudu Celebration 2026",
    category: "avurudu",
    date: "April 2026",
    coverImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    description: "Traditional games, oil lamp lighting, rabana playing, and Kiribath table.",
    photos: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "alms-giving-2026",
    title: "Annual Maha Sangha Alms Giving",
    category: "alms",
    date: "January 2026",
    coverImage: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=800&q=80",
    description: "Offering sacred alms (Dana) to Venerable Monks and receiving blessings.",
    photos: [
      "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<EventAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0D1A12]">
      <header className="bg-teal-800 text-[#F7F4EE] pt-12 pb-12 px-6 border-b border-[#1C2C21]">
        <div className="max-w-5xl mx-auto space-y-4">
          <Link href="/" className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
            ← Sanctuary Home
          </Link>
          <h1 className="font-serif text-4xl text-white!">Event & Cultural Albums</h1>
        </div>
      </header>

      <main className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {ALBUMS_DATA.map((album) => (
          <div
            key={album.id}
            onClick={() => {
              setActivePhotoIndex(0);
              setActiveAlbum(album);
            }}
            className="bg-white border border-[#EAE5DC] cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="h-64 relative bg-[#0A140E]">
              <Image
                src={album.coverImage}
                alt={album.title}
                className="w-full h-full object-cover"
                fill
              />
              <span className="absolute bottom-3 right-3 bg-black/80 text-[#C5A059] text-xs font-mono px-3 py-1">
                {album.photos.length} Photos
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl">{album.title}</h3>
              <p className="text-xs text-[#526357] mt-2">{album.description}</p>
              <span className="text-xs font-mono text-[#C5A059] mt-4 block">
                Open Album →
              </span>
            </div>
          </div>
        ))}
      </main>

      {/* Render Modal Outside Main Layout */}
      {activeAlbum && (
        <GalleryModal
          album={activeAlbum}
          activePhotoIndex={activePhotoIndex}
          setActivePhotoIndex={setActivePhotoIndex}
          onClose={() => setActiveAlbum(null)}
        />
      )}

    </div>
  );
}