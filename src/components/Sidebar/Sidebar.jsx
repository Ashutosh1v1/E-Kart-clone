import styled from "styled-components";
import Category from "./Category/Category";
import Price from "./Price/Price";


const Sidebar = ({ handleChange }) => {
  return (
    <SideWrapper>
      <section className="sidebar">
        <div className="logo-container">
          <h1>SHOE-KART</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
       
      </section>
    </SideWrapper>
  );
};
const SideWrapper = styled.div`
.sidebar {
  width: 15%;
  position: fixed;
  height: 100%;
  border-right: 2px solid #e5e5e5;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  margin-bottom: 4rem;
}

.logo-container h1 {
  margin-top: 1.3rem;
}
`

export default Sidebar;
