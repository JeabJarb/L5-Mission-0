# Responsive Homepage for Marketing Association New Zealand

## Responsive NavBar.jsx

- Creating a reference for the nav element

```JavaScript
const navRef = useRef();
```

- Function to toggle the responsive nav class

```JavaScript
const showNavBar = () => {
    navRef.current.classList.toggle(style.responsive_nav);
  };
```

- The rest of the NavBar

```JavaScript
<>
      {/* Header section with logo and navigation */}
      <header className={style.headerStyling}>
        <div className={style.logoContainer}>
          <img className={style.logoImg} src="logo.png" alt="logo" />{" "}
          {/* Logo image */}
          <h3>Logo</h3> {/* Logo text */}
        </div>

        {/* Navigation section */}
        <nav className={style.navStyling} ref={navRef}>
          <a className={style.aStyling} href="/#">
            Membership
          </a>
          <a className={style.aStyling} href="/#">
            Services
          </a>
          <a className={style.aStyling} href="/#">
            About
          </a>
          <a className={style.aStyling} href="/#">
            Contact
          </a>
          <button className={style.loginBtn}>Login</button> {/* Login button */}
          <button
            className={`${style.navBtn} ${style.navCloseBtn}`}
            onClick={showNavBar}
          >
            <FaTimes /> {/* Close icon */}
          </button>
        </nav>
        <button className={style.navBtn} onClick={showNavBar}>
          <FaBars /> {/* Menu icon */}
        </button>
      </header>
    </>
```

## Styling

- Centralized color scheme for consistent styling.

```CSS
:root {
    --mainColor: rgb(117, 117, 117);
    --mainColorLight: rgb(190, 190, 190);
    --secondaryColor: rgb(54, 54, 54);
    --textColor: #eee;
  }
```

- Styles the navigation button with hidden visibility by default.

```CSS
.navBtn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    display: none;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
}
```

## Media Query

- Responsive styles for screen widths 1024px and below.

```CSS
@media (max-width: 1024px) {
    .navBtn {
      display: block;
      opacity: 1;
      visibility: visible;
    }

    .navStyling {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
      background-color: var(--mainColor);
      transform: translateY(-100vh);
    }

    .responsive_nav {
      transform: none;
    }

    .navCloseBtn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    .aStyling {
      font-size: 1.5rem;
    }
  }
```
