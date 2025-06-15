import { useState } from "react";
import Box from "@src/components/challenge2/BoxComponent";

export default function BoxComments() {
  const [newComment, setNewComment] = useState("");
  const comments1 = [
    {
      id: 1,
      description: "fila uno",
      items: [
        {
          id: 1,
          description: "fila dos",
          items: [
            {
              id: 1,
              description: "fila tres",
              items: [
                {
                  id: 1,
                  description: "fila cuatro",
                  items: [],
                },
              ],
            },
            {
              id: 2,
              description: "fila tres",
              items: [],
            },
          ],
        },
        {
          id: 2,
          description: "fila dos",
          items: [
            {
              id: 1,
              description: "fila tres",
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      description: "fila uno",
      items: [],
    },
  ];

  const [comments, setComments] = useState(comments1);
  // const [comments, setComments] = useState([]);

  const createBox = () => {
    if (newComment != "") {
      const newC = {
        id: (comments.length + 1).toString(),
        description: newComment,
        items: [],
      };
      setComments([...comments, newC]);
    }
  };

  const editBox = () => {};

  const deleteBox = (idC) => {};

  return (
    <div className="grid gap-4 my-4 place-content-center ">
      <div className="flex justify-center gap-2">
        <input
          className="p-2 border-2 border-black dark:border-white w-72"
          type="text"
          value={newComment}
          placeholder="Escribe un nuevo comentario"
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="hover:opacity-25" onClick={createBox}>
          <h2 className="p-4 px-6 text-xl font-bold text-white bg-indigo-600 border-2 rounded-lg hover:brightness-125">
            Comentar
          </h2>
        </button>
      </div>
      {/* Caja de los comentarios  */}
      {comments.length > 0 ? (
        <div className="w-[1000px]">
          {comments.map((comnt, index) => {
            return (
              <div className="grid gap-2" key={index}>
                <Box editB={editBox} deleteB={deleteBox} comment={comnt} />;
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex place-content-center">
          <h2 className="text-5xl text-white">Sin comentarios</h2>
        </div>
      )}
    </div>
  );
}
