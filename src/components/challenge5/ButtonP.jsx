export default function ButtonP({ text, functionB }) {
  return (
    <div className="px-4 bg-orange-400 border rounded-md">
      <button className="p-4 font-medium" onClick={functionB}>
        {text}
      </button>
    </div>
  );
}
