export default function DataList({ text, idItem, updateFn, deleteFn }) {
  const updateData = () => {
    updateFn(idItem);
  };

  const deleteData = () => {
    deleteFn(idItem);
  };
  return (
    <section className="flex items-center justify-between">
      <h3 className="w-40 text-2xl text-left">{text}</h3>
      <div className="flex gap-2">
        <button className="hover:opacity-50" onClick={updateData}>
          <img className="h-10" src="/challenge4/Update.svg" alt="" />
        </button>
        <button className="hover:opacity-50" onClick={deleteData}>
          <img className="h-10" src="/challenge4/Delete.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
