import { useState } from "react";
import { reviewsData } from "../../data/reviews";
import '../../styles/Reviews.css';
import TestimonialCard from "./TestimonialCard";


export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % reviewsData.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? reviewsData.length - 1 : prev - 1
    );

  return (
    <section className="pb-40 pt-52 flex reviews justify-between">
      <div className="title text-left">
        <h2 className="mb-3">
          👉 Qué opina la gente con la que he trabajado.
        </h2>
        <p className="paragrap">
          Perspectivas sinceras de quienes han trabajado conmigo en distintos proyectos.
        </p>
      </div>

      <div className="testimonal w-full">
        <div className="absolute overflow-hidden -mt-12">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-12"
            style={{ transform: `translateX(-${current * 52}%)` }}
          >
            {reviewsData.map((review, index) => (
              <div key={index} className="flex-shrink-0">
                <TestimonialCard {...review} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between px-4 mt-56">
          <div className="sliderButtons">
            <button
            onClick={prevSlide}
            className="btn-circle me-4"
          >
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00488 15.3105C7.93393 15.3099 7.87208 15.2932 7.81055 15.25L7.74902 15.1973L0.800781 8.24902C0.74761 8.19486 0.721936 8.15273 0.709961 8.12402V8.12305C0.69484 8.0867 0.686523 8.04664 0.686523 7.99902C0.686552 7.95141 0.695155 7.91229 0.709961 7.87695V7.87598C0.721829 7.8475 0.747259 7.80517 0.800781 7.75098L7.75488 0.802734C7.84624 0.712472 7.92485 0.686523 8.00781 0.686523C8.08851 0.686605 8.16068 0.711136 8.24414 0.796875L8.24902 0.801758L8.30078 0.862305C8.34288 0.921907 8.35741 0.979964 8.35742 1.04492C8.35742 1.10957 8.34265 1.1672 8.30078 1.22656L8.24902 1.28711L1.8877 7.64844L15.2979 7.64844C15.4199 7.64847 15.4922 7.68362 15.5527 7.74414H15.5537C15.6146 7.80505 15.6494 7.87798 15.6494 8C15.6494 8.12202 15.6146 8.19495 15.5537 8.25586H15.5527C15.4922 8.31639 15.42 8.35153 15.2979 8.35156L1.8877 8.35156L8.24316 14.707C8.30448 14.7684 8.33626 14.8268 8.34863 14.8916L8.35449 14.959C8.3554 15.0489 8.32924 15.1225 8.24902 15.2031L8.24805 15.2041C8.1679 15.2847 8.09454 15.3113 8.00488 15.3105Z" fill="currentColor" stroke="currentColor" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="slide btn-circle"
          >
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M8.00488 15.3105C7.93393 15.3099 7.87208 15.2932 7.81055 15.25L7.74902 15.1973L0.800781 8.24902C0.74761 8.19486 0.721936 8.15273 0.709961 8.12402V8.12305C0.69484 8.0867 0.686523 8.04664 0.686523 7.99902C0.686552 7.95141 0.695155 7.91229 0.709961 7.87695V7.87598C0.721829 7.8475 0.747259 7.80517 0.800781 7.75098L7.75488 0.802734C7.84624 0.712472 7.92485 0.686523 8.00781 0.686523C8.08851 0.686605 8.16068 0.711136 8.24414 0.796875L8.24902 0.801758L8.30078 0.862305C8.34288 0.921907 8.35741 0.979964 8.35742 1.04492C8.35742 1.10957 8.34265 1.1672 8.30078 1.22656L8.24902 1.28711L1.8877 7.64844L15.2979 7.64844C15.4199 7.64847 15.4922 7.68362 15.5527 7.74414H15.5537C15.6146 7.80505 15.6494 7.87798 15.6494 8C15.6494 8.12202 15.6146 8.19495 15.5537 8.25586H15.5527C15.4922 8.31639 15.42 8.35153 15.2979 8.35156L1.8877 8.35156L8.24316 14.707C8.30448 14.7684 8.33626 14.8268 8.34863 14.8916L8.35449 14.959C8.3554 15.0489 8.32924 15.1225 8.24902 15.2031L8.24805 15.2041C8.1679 15.2847 8.09454 15.3113 8.00488 15.3105Z" fill="currentColor" stroke="currentColor" />
            </svg>
          </button>
          </div>
          <div className="flex gap-2 mt-6">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 bg-primary ${current === index ? ". w-4" : "opacity-20"
                }`}
            ></button>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}