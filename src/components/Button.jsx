import styled from "styled-components";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <BtnWrapper>
      <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
.btns:hover{
  color: white;
  background-color: black;
  transition: .2s ease-in-out ;
 

}

`


export default Button;
