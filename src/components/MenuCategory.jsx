import { useState } from 'react';
import '../styles/MenuCategory.css';
import MenuItemDetail from './MenuItemDetail';
import PropTypes from 'prop-types';

const MenuCategory = ({ menuCategoryName, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleIsOpen = () => setIsOpen((previousState) => !previousState);

  const rotateDegree = isOpen ? 45 : 0;

  return (
    <div className="menu-category" onClick={toogleIsOpen}>
      <div className="category-title">
        <h3>{menuCategoryName}</h3>
        <img
          src="../../public/assets/icon-plus.svg"
          alt="open and close button"
          style={{ transform: `rotate(${rotateDegree}deg)` }}
        />
      </div>

      {isOpen && <MenuItemDetail items={items} />}
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  menuCategoryName: PropTypes.array.isRequired,
};

export default MenuCategory;
