import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import styled from "styled-components";



const Nav = ({ handleInputChange, query }) => {
  return (
    <NavWrapper>
      <nav>
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="search your shoes..."
          />
        </div>
        <div className="profile-container">

          <FiHeart className="nav-icons" />


          <AiOutlineShoppingCart className="nav-icons" />


          <AiOutlineUserAdd className="nav-icons" />

        </div>
      </nav>
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
nav {
  display: flex;
  border-bottom: 2px solid #f3f3f3;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  z-index: 999;
  margin-left: 2rem;
}

nav input {
  padding: 12px 20px;
  border: none;
  background: #f7f6f6;
  outline: none;
  margin-right: 20px;
  border-radius: 5px;
  position: relative;
  width: 14rem;
}

.nav-icons {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 2rem;
}

`

export default Nav;
