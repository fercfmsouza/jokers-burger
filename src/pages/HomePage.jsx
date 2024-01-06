import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className='section-1 '>
        <img
          className='bg-image our-burger-img'
          src='/img/main-burger.jpg'
          alt='background burger image'
        />
        <div className='text-overlay our-burgers'>
          <h2>Conheça</h2>
          <h1>
            Nossos burgers<span className='dot'>.</span>
          </h1>
        </div>
        <div className='button-container'>
          <Link to='/menu' className='menu-button'>
            Cardápio
          </Link>
          <a
            href={`https://jokersburger.com.br/jokers_burger`}
            target='_blank'
            rel='noopener noreferrer'
            className='order-button'
          >
            Faça seu pedido
          </a>
        </div>
      </div>

      <div className='section-2'>
        <h1 className='title-animation'>
          Nossas Delícias<span className='dot'>.</span>
        </h1>
        <div className='img-container'>
          <div className='img-container-all'>
            <img src='/img/gotham.jpg' alt='delicious burger' />
            <p>Burgers</p>
          </div>
          <div className='img-container-all'>
            <img src='/img/petiscos.jpg' alt='delicious appetizer' />
            <p>Petiscos</p>
          </div>
          <div className='img-container-all'>
            <img src='/img/nutella.jpg' alt='delicious milkshake' />
            <p>Sobremesas</p>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <div className='section-img'>
          <img src='/img/app-burger.jpg' alt='the joker burger' />
        </div>
        <div className='section-3-content'>
          <div className='content-1'>
            <h2>Baixe Agora</h2>
            <h1>
              Nosso <span className='dot'>App.</span>
            </h1>
            <h2>E faça seu pedido</h2>
          </div>
          <div className='content-2'>
            <a
              href='https://play.google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/img/google.png' alt='google link' />
            </a>
            <a
              href='https://apps.apple.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/img/apple.png' alt='apple link' />
            </a>
          </div>
          <div className='content-3'>
            <h2>Ou peça direto pelo nosso whatsapp</h2>
            <div className='content-social'>
              <img src='/assets/whatsapp.svg' alt='whatsapp link' />
              <a
                href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                  '+5568992090190',
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='menu-button'
              >
                Faça seu pedido
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
