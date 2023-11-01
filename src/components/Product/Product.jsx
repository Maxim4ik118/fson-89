import { useContext } from 'react';
import css from './Product.module.css';
import { ModalContext } from 'context/ModalContext';

const Product = ({ id, title, price, discount, handleDeleteProduct }) => {
  const { dayOfTheMonth, openModal } = useContext(ModalContext);

  const productBg = discount ? '#97e605' : '#f9bf04';
  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <b>Day of the month: {dayOfTheMonth}</b>
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
      <button
        onClick={() => openModal({ title, price, discount })}
        className={css.productAddToCartBtn}
        type="button"
      >
        See the details
      </button>
      <button
        onClick={() => handleDeleteProduct(id)}
        className={css.productAddToCartBtn}
        type="button"
      >
        &times;
      </button>
    </div>
  );
};
export default Product;
