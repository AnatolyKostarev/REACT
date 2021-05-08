import './Header.css';
import logo from './logo.svg';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                Домашнее задание 2
            </h1>
      </header>
    )
}

export default Header;