"use client";

import { InfiniteMovingCards } from "../../lib/ui/Infinite-moving-cards";
function Testimonials() {
  return (
    <>
      <h2 className="text-center text-white text-6xl font-serif">
        Testimonials
      </h2>
      <div className="h-fit  rounded-md flex flex-col antialiased bg-black items-center justify-end relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

export default Testimonials;

const testimonials = [
  {
    quote:
      "This platform has completely changed how I shop online. The interface is smooth, checkout is quick, and I always find exactly what I need.",
    name: "Ananya Sharma",
  },
  {
    quote:
      "I love how seamless the browsing experience is. The attention to detail makes it feel like a premium shopping destination.",
    name: "Rahul Mehta",
  },
  {
    quote:
      "The recommendations are always spot on! It feels like the site really understands my style preferences.",
    name: "Priya Nair",
  },
  {
    quote:
      "What impressed me most was how fast the delivery is. Plus, the packaging feels thoughtful and eco-friendly.",
    name: "Arjun Verma",
  },
  {
    quote:
      "I was hesitant at first, but the return policy gave me confidence. Everything has been super convenient and reliable.",
    name: "Sneha Iyer",
  },
];
