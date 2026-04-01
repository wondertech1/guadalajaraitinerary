"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ContentImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "landscape" | "square" | "wide";
  priority?: boolean;
}

const aspectClasses = {
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export function ContentImage({
  src,
  alt,
  caption,
  aspectRatio = "landscape",
  priority = false,
}: ContentImageProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      <div
        className={`relative ${aspectClasses[aspectRatio]} w-full overflow-hidden rounded-lg`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-mono text-[11px] text-obsidiana/40">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
