import { BsFillBagFill } from "react-icons/bs";
import styled from "styled-components";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <SectionWrapper>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </SectionWrapper>
  );
};
const SectionWrapper= styled.div`
.card:hover{
box-shadow: 20px 10px 10px grey;
transition: .3s ease-in-out;

}
`



export default Card;
