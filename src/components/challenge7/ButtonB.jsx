export default function ButtonB({ text, functionB }) {
  return (
    <div>
      <button
        className="p-4 px-8 text-xl bg-green-400 border-2 border-black rounded hover:bg-green-600"
        onClick={functionB}
      >
        {text}
      </button>
    </div>
  );
}
