import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="column">
          <Link to="/">
            <img src="/img/logo.png" alt="Joker's Burguer Logo" />
          </Link>
        </div>

        <div className="column">
          <h1>CONTATO</h1>
          <ul className="contact-info">
            <li>+55 68 9.9209-0190</li>
            <li>Travessa Santa Inês, 401 - Aviário</li>
            <li>Rio Branco - Acre </li>
          </ul>
        </div>

        <div className="column">
          <h1>REDES SOCIAIS</h1>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.instagram.com/joker.burger.ac/"
                target="blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/instagram-small.svg" alt="Instagram Logo" />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/joker.burger.ac/?locale=pt_BR"
                target="blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/facebook-small.svg" alt="Facebook Logo" />
              </a>
            </li>

            <li>
              <a
                href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                  '+5568992090190',
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/whatsapp.svg" alt="Whatsapp Logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-paragraph">
        <p>
          Jokers © Made by{' '}
          <a
            href="https://www.linkedin.com/in/fernanda-souza-dev/"
            target="blank"
          >
            Fernanda Souza
          </a>{' '}
          and{' '}
          <a href="https://www.linkedin.com/in/louisecarnevali/" target="blank">
            Louise Carnevali
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
