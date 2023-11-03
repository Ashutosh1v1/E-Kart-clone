import styled from "styled-components";


const Products = ({ result }) => {
  return (
    <ProdWrapper>
      <section className="card-container">{result}</section>
    </ProdWrapper>
  );
};
const ProdWrapper = styled.div`
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  margin-top: 2rem;
  z-index: -2;
}

.card {
  margin: 20px;
  border: 2px solid #ededed;
  padding: 20px;
  cursor: pointer;
}

.card-img {
  width: 13rem;
  margin-bottom: 1rem;
}

.card-title {
  margin-bottom: 1rem;
}

.card-reviews {
  margin-bottom: 1rem;
  display: flex;
}

.rating-star {
  color: #d5ab55;
}

.total-reviews {
  font-size: 0.9rem;
  margin-left: 10px;
}

.card-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bag-icon {
  color: #535353;
}

`

export default Products;
