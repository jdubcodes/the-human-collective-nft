import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import './Header.css';

function Header() {
    return(
        <header>
            <div className="header-container">
                <div className="logo">
                    <a href="#">
                        <h1>The<br />Human<br />Collective</h1>
                    </a>
                </div>
                <div className="header-socials">
                    <a href=""><FaDiscord /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FiTwitter /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;