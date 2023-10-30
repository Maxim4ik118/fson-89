import React, { useState } from 'react';

import css from './ProductForm.module.css';

const ProductForm = ({ handleAddProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discount, setDiscount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const productData = {
      title,
      price: Number.parseFloat(price),
      discount: hasDiscount ? Number.parseFloat(discount) : null,
    };

    handleAddProduct(productData);

    setTitle('');
    setPrice('');
    setHasDiscount(false);
    setDiscount('');
  };

  const handleInputChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    const name = event.target.name; // 'price'

    switch (name) {
      case 'title': {
        setTitle(value);
        return;
      }
      case 'price': {
        setPrice(value);
        return;
      }
      case 'hasDiscount': {
        setHasDiscount(value);
        return;
      }
      case 'discount': {
        setDiscount(value);
        return;
      }
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${css.form} ${css.formLarge}`}>
      {title === 'Spagetti' && (
        <h2>Congrats! You won a promocode😒😭 - #R3E2A1🎉</h2>
      )}
      <label className={css.formLabel}>
        <p className={css.labelText}>Title:</p>
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={title}
        />
      </label>
      <label className={css.formLabel}>
        <p className={css.labelText}>Price:</p>
        <input
          type="text"
          name="price"
          onChange={handleInputChange}
          value={price}
        />
      </label>
      <label className={css.formLabel}>
        <input
          type="checkbox"
          name="hasDiscount"
          onChange={handleInputChange}
          checked={hasDiscount}
        />{' '}
        Has discount?
      </label>
      {hasDiscount && (
        <label className={css.formLabel}>
          <p className={css.labelText}>Discount:</p>
          <input
            type="text"
            name="discount"
            onChange={handleInputChange}
            value={discount}
          />
        </label>
      )}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
