import styled from "styled-components";
import Button from "../components/Button";


const Recommended = ({ handleClick }) => {
  return (
    <RecWrapper>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </RecWrapper>
  );
};
const RecWrapper = styled.div`
.recommended-flex {
  display: flex;
  margin-left: 20rem;
}

.recommended-title {
  margin-left: 20rem;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
}


`


export default Recommended;
