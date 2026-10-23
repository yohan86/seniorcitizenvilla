"use client";

import React, { useState } from "react";
import GalleryModal, { EventAlbum } from "../components/GalleryModal";
import Image from "next/image";
import Link from "next/link";
import { prefix } from "@/utils/prefix";

const ALBUMS_DATA: EventAlbum[] = [
  {
    id: "interior",
    title: "Ambient Care Spaces",
    category: "interior",
    date: "October 2026",
    coverImage: `${prefix}/images/gallery/interior/lobby007.jpeg`,
    description: "Thoughtfully Designed Living Spaces for Peace & Comfort",
    photos: [
      `${prefix}/images/gallery/interior/interior-1.jpeg`,
      `${prefix}/images/gallery/interior/interior-2.jpeg`,
      `${prefix}/images/gallery/interior/interior-3.jpeg`,
      `${prefix}/images/gallery/interior/lobby.jpeg`,
      `${prefix}/images/gallery/interior/lobby-2.jpeg`,
      `${prefix}/images/gallery/interior/lobby003.jpeg`,
      `${prefix}/images/gallery/interior/lobby004.jpeg`,
      `${prefix}/images/gallery/interior/lobby006.jpeg`,
      `${prefix}/images/gallery/interior/lobby007.jpeg`,
      `${prefix}/images/gallery/interior/lobby008.jpeg`,
    ],
  },
  {
    id: "exterior",
    title: "Outdoor Social Spaces",
    category: "exterior",
    date: "October 2026",
    coverImage: `${prefix}/images/gallery/exterior/seniorcitizenvilla.jpeg`,
    description: "Nature-Integrated Facilities Designed for Mindful Recovery",
    photos: [
      `${prefix}/images/gallery/exterior/seniorcitizenvilla.jpeg`,
      `${prefix}/images/gallery/exterior/garden.jpeg`,
      `${prefix}/images/gallery/exterior/garden001.jpeg`,
      `${prefix}/images/gallery/exterior/garden002.jpeg`,
      `${prefix}/images/gallery/exterior/garden003.jpeg`,
      `${prefix}/images/gallery/exterior/outside.jpeg`,
    ],
  },
  {
    id: "rooms",
    title: "Indoor Living Spaces",
    category: "rooms",
    date: "October 2026",
    coverImage: `${prefix}/images/gallery/rooms/room007.jpeg`,
    description: "Nature-Integrated Facilities Designed for Mindful Recovery",
    photos: [
      `${prefix}/images/gallery/rooms/room007.jpeg`,
      `${prefix}/images/gallery/rooms/room-1.jpeg`,
      `${prefix}/images/gallery/rooms/room-2.jpeg`,
      `${prefix}/images/gallery/rooms/room-3.jpeg`,
      `${prefix}/images/gallery/rooms/room004.jpeg`,
      `${prefix}/images/gallery/rooms/room005.jpeg`,
      `${prefix}/images/gallery/rooms/room006.jpeg`,
      `${prefix}/images/gallery/rooms/room007.jpeg`,
      `${prefix}/images/gallery/rooms/room008.jpeg`,
      `${prefix}/images/gallery/rooms/veranda.jpeg`,
    ],
  },
  {
    id: "alms-giving-2026",
    title: "Annual Maha Sangha Alms Giving",
    category: "alms",
    date: "January 2026",
    coverImage: `${prefix}/images/gallery/armsgiven1.jpeg`,
    description: "Offering sacred alms (Dana) to Venerable Monks and receiving blessings.",
    photos: [
      `${prefix}/images/gallery/armsgiven1.jpeg`,
      `${prefix}/images/gallery/armsgiven2.jpeg`,
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