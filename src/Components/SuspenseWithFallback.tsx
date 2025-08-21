import { Suspense } from "react";
export const SuspenseWithFallback = (child: JSX.Element) => (
  <Suspense
    fallback={
      <section className="w-full h-[50vh]bg-black text-white flex justify-center items-center text-4xl">
        <h2>Content is Loading...</h2>
      </section>
    }
  >
    {child}
  </Suspense>
);
