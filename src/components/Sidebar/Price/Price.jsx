import styled from "styled-components";
import Input from "../../Input";


const Price = ({ handleChange }) => {
  return (
    <PriceWrapper>
      <div className="ml">
        <h2 className="sidebar-title price-title">Sort-By Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="0 - $50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </PriceWrapper>
  );
};
const PriceWrapper = styled.div`
.price-title {
  margin-top: 20px;
  font-size: 19px;
}

.ml {
  margin-left: 20px;
}


`

export default Price;
