export default function Bar({ progress }) {
  // const progress = 10;
  return (
    <div className="flex w-full m-4 bg-gray-400 border rounded-xl">
      <div
        className="flex bg-green-400 border justify-endh-full rounded-xl"
        style={{ width: `${progress}%` }}
      >
        <span className="p-2 font-bold text-black">{progress}%</span>
      </div>
    </div>
  );
}
