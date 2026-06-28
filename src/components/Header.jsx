import { useState } from 'react';
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div
        className={'header__brand' + (open ? ' header__brand--open' : '')}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <img className="header__brand-logo" src="/headerSlice1.png" alt="" />
        <div className="header__social">
          <a href="https://www.facebook.com/" className="header__social-link">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://twitter.com/" className="header__social-link">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="https://discord.gg/" className="header__social-link">
            <img src="/discord.png" alt="" />
          </a>
          <a href="https://www.paypal.me/" className="header__social-link">
            <img src="/paypal.png" alt="" />
          </a>
        </div>
        <div className="header__attribution">
          <img className="header__attribution-logo" src="/headerSlice2.png" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
