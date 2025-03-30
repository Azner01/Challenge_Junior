export default function ChallengesComp({
  title,
  url,
  text,
  img,
  alt,
  classIMG,
}) {
  return (
    <button className="grid p-4 space-y-4 text-center bg-white border-4 w-72 hover:bg-sky-700 hover:text-white dark:border-black">
      <a href={url} className="grid justify-center gap-2">
        <h1 className="p-2 text-xl font-bold border-2">{title}</h1>
        <img src={img} alt={alt} className={classIMG} />
        <p className="text-justify">{text}</p>
      </a>
    </button>
  );
}
