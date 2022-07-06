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
      <Link href="/">
        <S.Logo
          src="/assets/studio-ghibli-logo.webp"
          alt="Studio Ghibli logo"
          height={72}
          width={128}
        />
      </Link>

      <nav>
        {MENU_ITEMS.map(({ href, text }) => (
          <Link href={href} key={href} passHref>
            <S.NavLink active={router.pathname === href}>{text}</S.NavLink>
          </Link>
        ))}
      </nav>
    </S.Container>
  );
};

export default Header;
