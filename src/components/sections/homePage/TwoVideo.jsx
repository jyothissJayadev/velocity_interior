"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

export default function TwoVideo({
  title = "Stunning Video Showcase",
  description = "Watch our featured video content with immersive visual effects",
  videoUrl = "https://www.youtube.com/embed/P5aaT-QUtFU",
  videoAlt = "Featured promotional video",
  keywords = "video showcase, promotional content, featured video",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="video.other" />
        <meta property="og:video" content={videoUrl} />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link
          rel="canonical"
          href={typeof window !== "undefined" ? window.location.href : ""}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: title,
              description: description,
              thumbnailUrl: "/images/video_back.jpg",
              contentUrl: videoUrl,
              uploadDate: new Date().toISOString(),
            }),
          }}
        />
      </Head>

      <div
        className="relative h-screen w-full overflow-hidden"
        aria-label={videoAlt}
      >
        {/* Background image with subtle white blur */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/video_back.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px) brightness(1.05)",
            backgroundColor: "rgba(255, 255, 255, 0.4)", // Soft white glow feel
            mixBlendMode: "lighten", // helps make the blur color feel brighter
          }}
          role="presentation"
          aria-hidden="true"
        />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          {/* Gradient Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">
              {title}
            </span>
          </h1>

          {/* Responsive video */}
          <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
            {isLoaded && (
              <iframe
                className="w-full h-full"
                src={`${videoUrl}?autoplay=0&controls=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>

          {/* Hidden SEO content */}
          <div className="sr-only">
            <p>{description}</p>
            <p>{keywords}</p>
          </div>
        </div>
      </div>
    </>
  );
}
