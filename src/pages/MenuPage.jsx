import MenuCategory from '../components/MenuCategory';
import '../styles/MenuPage.css';
import products from '../dataJson/products.json';

const MenuPage = () => {
  return (
    <div className='menu-container'>
      <h1 className='title-menu'>
        nosso cardápio<span className='dot'>.</span>
      </h1>
      <h2 className='title-menu'>Escolha suas delícias e faça seu pedido</h2>
      <div className='menu-all-list'>
        {Object.keys(products).map((menuCategoryName) => (
          <MenuCategory
            menuCategoryName={menuCategoryName}
            items={products[menuCategoryName]}
            key={menuCategoryName}
          />
        ))}
      </div>

      <div className='menu-btn'>
        <a
          href={`https://jokersburger.com.br/jokers_burger`}
          target='_blank'
          rel='noopener noreferrer'
          className='menu-button'
        >
          Faça seu pedido aqui
        </a>
      </div>
    </div>
  );
};

export default MenuPage;
