import { useState, useEffect } from "react";
import Stars from "./Stars";

export default function StarRating() {
  const [Rating, setRating] = useState("0");
  const [Fixed, setFixed] = useState(false);

  const numberStar = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  const ratingNumber = (num) => {
    setRating(num);
  };

  const fixedRating = (x) => {
    setFixed(x);
  };

  const ResetStars = () => {
    setRating("0");
    setFixed(false);
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 mt-12 bg-white border-2 md:w-1/2 md:self-center">
      <div className="flex gap-4 place-items-center">
        <h2 className="text-3xl font-bold">Puntaje:</h2>
        <h3 className="text-3xl ">{Rating}</h3>
        <button
          className="p-2 px-4 ml-40 text-white bg-gray-500 border-2"
          onClick={ResetStars}
        >
          Reset
        </button>
      </div>
      <div className="flex">
        {numberStar.map((num) => (
          <Stars
            key={num.id}
            num={num.id}
            value={ratingNumber}
            rating={Rating}
            fixed={fixedRating}
            fixedState={Fixed}
          />
        ))}
      </div>
    </section>
  );
}
