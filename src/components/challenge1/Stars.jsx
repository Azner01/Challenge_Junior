import { useState, useEffect } from "react";

export default function Stars({ num, rating, value, fixed, fixedState }) {
  const [Star, setStar] = useState(false);

  useEffect(() => {
    if (rating < num) {
      setStar(false);
    } else {
      setStar(true);
    }
  });

  const On = () => {
    if (fixedState === false) {
      setStar(true);
      value(num);
    }
  };

  const fixedRating = () => {
    fixed(true);
    if (fixedState === true) {
      setStar(true);
      value(num);
    }
  };

  return (
    <div
      className="flex justify-center"
      key={num}
      onMouseEnter={On}
      onClick={fixedRating}
    >
      {Star ? (
        <img src="/challenge1/Star-Fill.svg" alt="" className="w-20 h-20" />
      ) : (
        <img src="/challenge1/Star-Empty.svg" alt="" className="w-20 h-20" />
      )}
    </div>
  );
}
