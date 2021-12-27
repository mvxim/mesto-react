import headerLogo from "../images/logo/logo_color_white.svg"

function Header() {
  return (
      <header className="header page__header">
        <a
            className="header__link"
            href="/#"
        >
          <img
              alt="Логотип сервиса «Место»."
              className="header__logo"
              src={ headerLogo }
          />
        </a>
      </header>
  )
}

export default Header
