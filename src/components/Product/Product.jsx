import css from './Product.module.css';

export const Product = ({ title, price, discount }) => {
  const productBg = discount ? '#97e605' : '#f9bf04';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width="640"
        className={css.productImg} // "Product_productImg__HjAFi"
      />
      <h2>{title} </h2>
      {discount ? (
        <h3 className={css.discountBage}>Discount: {discount}$</h3>
      ) : (
        <p className={css.apology}>
          Sorry, but discount on this type of product has expired!
        </p>
      )}
      <p>Price: {price}$</p>
      <button className={css.productAddToCartBtn} type="button">
        Add to cart
      </button>
    </div>
  );
};
