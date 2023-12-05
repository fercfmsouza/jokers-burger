import '../styles/MenuItemDetail.css';
import PropTypes from 'prop-types';

const MenuItemDetail = ({ items }) => {
  return (
    <div className='menu-item-container'>
      {items.map((item) => {
        return (
          <div key={item.id} className='menu-item-card'>
            <div className='menu-item-info'>
              <img src={item.image} alt='item photo' />
              <div className='menu-item-info-2'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </div>

            <div className='menu-item-description'>{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};

MenuItemDetail.propTypes = { items: PropTypes.array.isRequired };

export default MenuItemDetail;
