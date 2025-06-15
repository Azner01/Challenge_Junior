import { useEffect, useState } from "react";
import Create_CRUD from "@components/challenge4/Create_CRUD";
import DataList from "@components/challenge4/DataList";
import Update_CRUD from "@components/challenge4/Update_CRUD";

export default function To_Do_List() {
  const [items, setItems] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [filterItems, setFilterItems] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState();

  // console.log(items);

  useEffect(() => {
    try {
      const localItems = localStorage.getItem("Tasks");
      if (localItems) {
        setItems(JSON.parse(localItems));
      }
    } catch (error) {
      console.error("Error al parsear el localStorage: ", error);
      setItems([]);
    }
  }, []);

  useEffect(() => {
    if (textSearch !== "") {
      if (items !== null || items !== undefined) {
        let filterI = Object.entries(items)
          .filter(([key, value]) => value.includes(textSearch))
          .map(([key, value]) => value);
        setFilterItems(filterI);
      }
    } else {
      setFilterItems(items);
    }
  }, [textSearch, items]);

  const searchData = (e) => {
    setTextSearch(e.target.value);
  };

  const showCreateFn = () => {
    setShowCreate(true);
  };

  const hideCreateFn = () => {
    setShowCreate(false);
  };

  const hideUpdateFn = () => {
    setShowUpdate(false);
  };

  const updateFn = (id) => {
    setShowUpdate(true);
    setIdUpdate(id);
  };

  const deleteData = (id) => {
    let idString = id.toString();
    let newData = Object.entries(items)
      .filter(([key, value]) => key !== idString)
      .map(([key, value]) => value);
    localStorage.setItem("Tasks", JSON.stringify(newData));
    setItems(newData);
  };

  return (
    <section className="flex justify-center p-8 mx-auto mt-4 bg-white border-2 border-black md:w-1/2">
      <div className="grid items-center justify-center gap-2 text-center">
        <h1 className="text-4xl font-semibold">To Do List</h1>
        <div className="flex items-center gap-2">
          <input
            className="border-2 border-black w-72"
            type="text"
            placeholder="Buscar item..."
            onChange={searchData}
          />
          <button onClick={showCreateFn}>
            <img className="h-10" src="/challenge4/Create.svg" alt="" />
          </button>
        </div>
        <div className="grid gap-2">
          {filterItems !== null ? (
            filterItems.map((item, index) => {
              const key =
                item.id !== undefined ? String(item.id) : String(index);

              return (
                <DataList
                  key={key}
                  text={item}
                  idItem={index}
                  updateFn={updateFn}
                  deleteFn={deleteData}
                />
              );
            })
          ) : (
            <h2>Sin Datos...</h2>
          )}
          {showCreate && (
            <Create_CRUD
              hideFn={hideCreateFn}
              itemsData={items}
              itemsFn={setItems}
            />
          )}
          {showUpdate && (
            <Update_CRUD hideFn={hideUpdateFn} id={idUpdate} data={items} />
          )}
        </div>
      </div>
    </section>
  );
}
