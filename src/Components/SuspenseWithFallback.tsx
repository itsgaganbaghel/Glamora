import { Suspense } from "react";
export const SuspenseWithFallback = (child: JSX.Element) => (
  <Suspense
    fallback={
      <section className="min-w-full absolute inset-0   min-h-[100vh] text-red-400 flex justify-center items-center text-4xl">
        <h2>Content is Loading...</h2>
      </section>
    }
  >
    {child}
  </Suspense>
);
