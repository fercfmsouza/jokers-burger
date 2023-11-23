import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className='section-1'>
        <img
          className='bg-image'
          src='../../public/img/triplo-joker.png'
          alt='background burger image'
        />
        <div className='text-overlay'>
          <h2>Conheça</h2>
          <h1>
            Nossos burgers<span className='dot'>.</span>
          </h1>
        </div>
        <div className='button-container'>
          <Link to='/menu' className='menu-button'>
            Cardápio
          </Link>
          <Link to='/' className='order-button'>
            Faça seu pedido
          </Link>
        </div>
      </div>

      <div className='section-2'>
        <h1>
          Nossas Delícias<span className='dot'>.</span>
        </h1>
        <div className='img-container'>
          <div>
            <img src='../../public/img/burguer.png' alt='delicious burger' />
            <p>Burgers</p>
          </div>
          <div>
            <img src='../../public/img/bolinho.png' alt='delicious appetizer' />
            <p>Entradas</p>
          </div>
          <div>
            <img
              src='../../public/img/milkshake.png'
              alt='delicious milkshake'
            />
            <p>Sobremesas</p>
          </div>
        </div>
      </div>

      <div className='section-3'>
        <div className='section-img'>
          <img src='../../public/img/the-joker.png' alt='the joker burger' />
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
            <Link to='/'>
              <img src='../../public/img/google.png' alt='google link' />
            </Link>
            <Link to='/'>
              <img src='../../public/img/apple.png' alt='apple link' />
            </Link>
          </div>
          <div className='content-3'>
            <h2>Ou peça direito pelo nosso whatsapp</h2>
            <div>
              <img src='../../public/assets/whatsapp.svg' alt='whatsapp link' />
              <Link to='/'>Faça seu pedido</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
