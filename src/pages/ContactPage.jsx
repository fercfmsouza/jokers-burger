import MapContainer from '../components/MapContainer';
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
            <div className="contact-infos-icon">
              <span className="material-symbols-outlined"> location_on</span>
              {/* <img src="/assets/local.svg" alt="Local Icon" /> */}
            </div>

            <div className="contact-infos-text">
              <h3>Localização</h3>
              <p>Travessa Santa Inês, 401 - Aviário</p>
              <p>Rio Branco - Acre</p>
              <p>Brasil</p>
            </div>
          </div>

          <div className="contact-infos">
            <div className="contact-infos-icon">
              <span className="material-symbols-outlined"> call</span>
              {/* <img src="/assets/fone.svg" alt="Fone Icon" /> */}
            </div>

            <div className="contact-infos-text">
              <h3>Fale conosco</h3>
              <p>+55 68 9.9209-0190</p>
            </div>
          </div>

          <div className="contact-infos">
            <div className="contact-infos-icon">
              <span className="material-symbols-outlined"> schedule</span>
              {/* <img src="/assets/clock.svg" alt="Local Icon" /> */}
            </div>

            <div className="contact-infos-text">
              <h3>Horário de Funcionamento</h3>
              <p>18-23h de ter à dom</p>
            </div>
          </div>
        </div>

        <div className="contact-wrapper-img">
          {/* <img src="/img/adress.png" alt="Image of Google Maps adress" /> */}
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
