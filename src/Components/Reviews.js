import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = customerReviews.length;

  const { name, location, message } = customerReviews[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalReviews - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === totalReviews - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          Trusted by <span className="rw-text-num">1500+ Patients</span>
        </p>

        <p className="rw-text-desc">
          Hear what our clients have to say
        </p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">“</span>
          <span className="rw-review">{message}</span>
          <span className="rw-text-quote2">”</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{name}</p>
            <p className="rw-reviewer-place">{location}</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={handlePrev}
              aria-label="Previous Review"
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={handleNext}
              aria-label="Next Review"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
