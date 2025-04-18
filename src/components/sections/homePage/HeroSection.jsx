// components/HeroSection.jsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_back.jpg" // Path relative to the public folder
          alt="Velocity Interiors"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Velocity Interiors
        </h1>
        <p className="text-xl font-light">Where Speed Meets Design</p>
      </div>
    </section>
  );
}
