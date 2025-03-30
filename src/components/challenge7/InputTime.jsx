export default function InputTime({
  lenghtNum,
  classPlus,
  timeNumber,
  changeEvent,
}) {
  return (
    <div className="m-4 border-2 border-black">
      <input
        type="text"
        className={"h-24 text-3xl text-center " + classPlus}
        minLength="1"
        maxLength={lenghtNum}
        value={timeNumber}
        onChange={changeEvent}
      />
    </div>
  );
}
