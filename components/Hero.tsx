import React from "react";

function Hero() {
  return (
    <div className="bg-yellow-400 px-10 py-10 lg:py-0 border-y border-black flex items-center justify-between gap-5">
      {/* Text */}
      <div className="space-y-5">
        <h1 className="max-w-xl text-6xl font-serif">
          <span className="underline decoration-4 decoration-black">
            Medium
          </span>{" "}
          is a place to write, read, and connect
        </h1>
        <h2 className="text-sm max-w-xl">
          It's easy and free to post your thinking on any topic and connect with
          millions of readers
        </h2>
      </div>

      {/* Image */}
      <img
        className="hidden md:block h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
      />
    </div>
  );
}

export default Hero;
