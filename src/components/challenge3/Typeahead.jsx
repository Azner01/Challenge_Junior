import { useState } from "react";

import countriesData from "@src/constants/countries.json";

export default function Typeahead() {
  const listData = countriesData;
  const [showCountries, setShowCountries] = useState(false);
  const [country, setCountry] = useState("");
  const [selectCountry, setSelectCountry] = useState("");

  //   console.log(country);

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  const changeSelectCountry = (e) => {
    setCountry(e.target.value);
    setSelectCountry(e.target.value);
    hideList();
  };

  const showList = () => {
    setShowCountries(true);
  };

  const hideList = () => {
    setShowCountries(false);
  };

  const filterCountries = listData.filter((data) =>
    data.name.toLowerCase().includes(country.toLowerCase())
  );

  return (
    <section className="flex items-center justify-center place-content-center">
      <div className="grid justify-center p-6 bg-white border-4 border-black dark:border-white">
        <input
          onClick={showList}
          //   onBlur={hideList}
          value={country}
          type="text"
          onChange={changeCountry}
          placeholder="Escribe el nombre de un país"
          className="border-2 border-black w-72 focus:border-blue-200 focus:border-4"
        ></input>
        {showCountries && (
          <div className="absolute grid p-2 mt-8 overflow-y-auto bg-white border-2 max-h-48 w-72">
            {filterCountries.map((data) => (
              <button
                className="text-left hover:bg-blue-300"
                key={data.code}
                value={data.name}
                onClick={changeSelectCountry}
                role="listbox"
              >
                {data.name}
              </button>
            ))}
          </div>
        )}

        <h3 className="text-xl mt-60">País seleccionado: {selectCountry}</h3>
      </div>
    </section>
  );
}
