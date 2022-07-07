import * as S from "./styles";

const Tooltip = ({ text, children, ...props }: any) => {
  return (
    <S.Container {...props}>
      <S.Tooltip>{text}</S.Tooltip>
      {children}
    </S.Container>
  );
};

export default Tooltip;
