import { useState } from "react";

export default function Update_CRUD({ hideFn, id, data }) {
  const [dataItems, setDataItems] = useState(data);
  const [idUpdate, setIdUpdate] = useState(id.toString());

  let value = Object.entries(data)
    .filter(([key, value]) => key === idUpdate)
    .map(([key, value]) => value);

  const [newValue, setNewValue] = useState(value);

  const updateFn = (e) => {
    setNewValue(e.target.value);
  };

  const pushData = () => {
    function update() {
      const newArray = dataItems;
      newArray[idUpdate] = newValue;
      return newArray;
    }

    const updateArray = update();
    localStorage.setItem("Tasks", JSON.stringify(updateArray));

    hideFn();
  };
  return (
    <section className="absolute bottom-0 grid p-20 space-y-8 bg-yellow-300 border-4 border-black ">
      <h2 className="text-3xl text-center">Editar Tarea</h2>
      <input type="text" onChange={updateFn} value={newValue} />
      <div className="flex justify-between gap-4">
        <button
          className="p-2 px-4 bg-green-400 border-2 border-black"
          onClick={pushData}
        >
          Añadir
        </button>
        <button
          className="p-2 px-4 bg-red-400 border-2 border-black"
          onClick={hideFn}
        >
          Cancelar
        </button>
      </div>
    </section>
  );
}
