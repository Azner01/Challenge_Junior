import ChallengesComp from "@components/ChallengesComp";
import { list } from "src/constants/ListChallenges";

export default function ListChallengesComp() {
  const challenges = list;
  return (
    <div class="p-8 pt-24 flex gap-2">
      {challenges.map((index) => (
        <ChallengesComp
          client:load
          title={index.title}
          url={index.url}
          text={index.text}
          key={index.id}
          img={index.img}
          alt={index.alt}
          classIMG={index.classIMG}
        />
      ))}
    </div>
  );
}
