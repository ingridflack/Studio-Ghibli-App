import { IPerson } from "../../types";
import * as S from "./styles";

interface PersonInfoProps {
  data: IPerson;
}

const PersonInfo = ({ data }: PersonInfoProps) => {
  const { name, age, gender } = data;

  return (
    <S.Person>
      <S.PersonImage
        src="/assets/user-placeholder.png"
        alt={`${name}'s photo`}
        width="4rem"
        height="4rem"
      />

      <S.Info>
        <p>{name || "Unknown"}</p>
        <span>{(age && `Age: ${age}`) || "Unknown"}</span>
        <span>{gender || "Unknown"}</span>
      </S.Info>
    </S.Person>
  );
};

export default PersonInfo;
