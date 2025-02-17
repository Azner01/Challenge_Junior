export default function ChallengesComp({ title, url, text }) {
  return (
    <button className="p-4 space-y-4 text-center bg-white border-4 w-72 hover:bg-red-500 hover:text-white">
      <a href="/challenges/challenge1">
        <h1 className="p-2 text-xl font-bold border-2">{title}</h1>
        <img src="/Challenge-1.png" alt="Imagen del challenge 1" />
        <p className="text-justify">{text}</p>
      </a>
    </button>
  );
}
