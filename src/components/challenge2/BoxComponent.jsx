import { useState, useEffect } from "react";

export default function Box({ editB, deleteB, comment }) {
  const [newComment, setNewComment] = useState("");
  const [activecomment, setActiveComment] = useState(false);
  // const [comment, setComment] = useState([]);

  // useEffect(() => {
  //   setComment(commentN);
  //   // console.log(comment);
  // }, [commentN]);

  const activeC = () => {
    setActiveComment(true);
  };

  const disactiveC = () => {
    setActiveComment(false);
  };

  const createB = () => {
    let idC = comment.length + 1;
    if (newComment != "") {
      const newC = {
        id: idC.toString(),
        description: newComment,
        items: [],
      };
    }
  };

  return (
    <div className="grid">
      <div className="grid gap-4 px-4 py-4 text-lg bg-white border-2">
        <span className="text-lg">{comment.description}</span>
        <div className="flex gap-4 align-middle">
          <button onClick={activeC}>
            <img
              className="h-10 hover:brightness-50"
              src="/challenge2/Add.svg"
              alt=""
            />
          </button>
          <button onClick={editB}>
            <img
              className="h-8 hover:brightness-50"
              src="/challenge2/Update.svg"
              alt=""
            />
          </button>
          <button onClick={deleteB}>
            <img
              className="h-8 hover:brightness-50"
              src="/challenge2/Delete.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      {activecomment && (
        <div className="grid">
          <input
            className="w-full h-full p-2 "
            type="text"
            placeholder="Escribe tu comentario"
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex dark:text-white">
            <button
              className="p-2 m-2 bg-blue-400 dark:bg-blue-600 rounded-xl hover:brightness-75"
              onClick={createB}
            >
              Comentar
            </button>
            <button
              className="p-2 m-2 hover:bg-gray-400 rounded-xl"
              onClick={disactiveC}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {comment && comment.items && Object.keys(comment.items).length > 0 ? (
        <div className="grid gap-2 ml-12">
          {comment.items.map((comnt, i) => {
            return (
              <div className="ml-4" key={i}>
                <Box editB={editB} deleteB={deleteB} comment={comnt} />
              </div>
            );
          })}
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
