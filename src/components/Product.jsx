export const Product = ({ title, price, discount }) => {
    return (
      <div>
        <img
          src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          alt="Tacos With Lime"
          width="640"
        />
        <h2>{title} </h2>
        {discount ? (
          <h3>Discount: {discount}$</h3>
        ) : (
          <p>Sorry, but discount on this type of product has expired!</p>
        )}
        <p>Price: {price}$</p>
        <button type="button">Add to cart</button>
      </div>
    );
  };