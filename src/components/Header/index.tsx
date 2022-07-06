import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";

const MENU_ITEMS = [
  { href: "/", text: "Home" },
  { href: "/favorites", text: "Favorites" },
];

const Header = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Logo src="/assets/studio-ghibli-logo.webp" />

      <nav>
        {MENU_ITEMS.map(({ href, text }) => (
          <Link href={href} key={href}>
            <S.NavLink active={router.pathname === href}>{text}</S.NavLink>
          </Link>
        ))}
      </nav>
    </S.Container>
  );
};

export default Header;
