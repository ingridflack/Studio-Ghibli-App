import Link from "next/link";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/studio-ghibli-logo.webp" />

      <div>
        <Link href="/">
          <S.NavLink>Home</S.NavLink>
        </Link>
        <Link href="/favorites">
          <S.NavLink>Favorites</S.NavLink>
        </Link>
      </div>
    </S.Container>
  );
};

export default Header;
