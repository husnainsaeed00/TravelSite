

import WorldImage from './images/world.svg';

// ...

export default function Logo() {
    return (
      <header>
        <div className="logo">
        <img src={WorldImage} alt="World" className="logo-icon" />
        Wold Tour
        </div>
      </header>
    );
  }