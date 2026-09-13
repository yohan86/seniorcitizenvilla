"use client";

import Image from "next/image";
import React, { useEffect } from "react";

export interface EventAlbum {
  id: string;
  title: string;
  category: string;
  date: string;
  coverImage: string;
  description: string;
  photos: string[];
}

interface GalleryModalProps {
  album: EventAlbum;
  activePhotoIndex: number;
  setActivePhotoIndex: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
}

export default function GalleryModal({
  album,
  activePhotoIndex,
  setActivePhotoIndex,
  onClose,
}: GalleryModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev === 0 ? album.photos.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev === album.photos.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [album, onClose, setActivePhotoIndex]);

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0D1A12] border border-[#1C2C21] max-w-4xl w-full p-6 relative space-y-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start border-b border-[#1C2C21] pb-3">
          <div>
            <span className="text-xs font-mono text-[#C5A059] uppercase tracking-wider">
              {album.date} • Photo {activePhotoIndex + 1} of {album.photos.length}
            </span>
            <h3 className="font-serif text-sm md:text-2xl text-white">{album.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex gap-2 text-[#A3B0A7] hover:text-white font-mono text-xs uppercase bg-[#0A140E] px-3 py-1.5 border border-[#1C2C21]"
          >
            <span className="hidden md:flex">Close</span>✕ 
          </button>
        </div>

        {/* Main Image Viewport */}
        <div className="relative h-[50vh] min-h-[300px] flex items-center justify-center bg-[#0A140E] border border-[#1C2C21]">
          <Image
            src={album.photos[activePhotoIndex]}
            alt={`Photo ${activePhotoIndex + 1}`}
            className="max-h-full max-w-full object-contain"
            fill
          />

          <button
            onClick={() =>
              setActivePhotoIndex((prev) =>
                prev === 0 ? album.photos.length - 1 : prev - 1
              )
            }
            className="absolute bottom-1 left-3 md:bottom-auto bg-[#0A140E]/80 hover:bg-[#C5A059] hover:text-[#0A140E] text-white px-3 py-2 font-mono text-xs border border-[#1C2C21]"
          >
            ← <span className="hidden md:inline">Prev</span>
          </button>

          <button
            onClick={() =>
              setActivePhotoIndex((prev) =>
                prev === album.photos.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute bottom-1 right-3 md:bottom-auto bg-[#0A140E]/80 hover:bg-[#C5A059] hover:text-[#0A140E] text-white px-3 py-2 font-mono text-xs border border-[#1C2C21]"
          >
            <span className="hidden md:inline">Next</span> →
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="relative flex gap-2 overflow-x-auto pb-2 border-t border-[#1C2C21] pt-3">
          {album.photos.map((photo, pIdx) => (
            <button
              key={pIdx}
              onClick={() => setActivePhotoIndex(pIdx)}
              className={`relative h-14 w-20 flex-shrink-0 border transition-all ${
                activePhotoIndex === pIdx
                  ? "border-[#C5A059] scale-105 opacity-100"
                  : "border-[#1C2C21] opacity-40 hover:opacity-100"
              }`}
            >
              <Image
                src={photo}
                alt="thumbnail"
                className="w-full h-full object-cover"
                fill
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}