import '../styles/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>
        contato<span className="dot">.</span>
      </h1>

      <div className="contact-wrapper">
        <div className="contact-wrapper-info">
          <div className="contact-infos">
            <div>
              <img src="/assets/fone.svg" alt="Fone Icon" />
            </div>

            <ul>
              Fale conosco
              <li>+55 68 9.9209-0190</li>
            </ul>
          </div>

          <div className="contact-infos">
            <div>
              <img src="/assets/local.svg" alt="Local Icon" />
            </div>

            <ul>
              Localização
              <li>Rua Santa Inês, 401 - Aviário</li>
              <li>Rio Branco - Acre</li>
            </ul>
          </div>

          <div className="contact-infos">
            <div>
              <img src="/assets/clock.svg" alt="Local Icon" />
            </div>

            <ul>
              Horário de Funcionamento
              <li>18-23h de ter à dom</li>
            </ul>
          </div>
        </div>

        <div className="contact-wrapper-img">
          <img src="/img/adress.png" alt="Image of Google Maps adress" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
