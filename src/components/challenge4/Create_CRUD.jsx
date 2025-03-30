import { useEffect, useState } from "react";

export default function Create_CRUD({ hideFn, itemsData, itemsFn }) {
  const [createData, setCreateData] = useState("");
  const [items, setItems] = useState(itemsData);

  const createFn = (e) => {
    setCreateData(e.target.value);
  };

  const pushData = () => {
    setItems(items.push(createData));
    itemsFn(items);
    localStorage.setItem("Tasks", JSON.stringify(items));
    hideFn();
  };

  return (
    <section className="absolute bottom-0 grid p-20 space-y-8 bg-blue-300 border-4 border-black ">
      <h2 className="text-3xl text-center">Crear Tarea</h2>
      <input
        className="p-2 text-xl "
        type="text"
        placeholder="Escribir contenido..."
        style={{ outlineStyle: "none" }}
        onChange={createFn}
      />
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
