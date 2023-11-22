import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { Product, ProductForm, Section } from 'components';
import Modal from 'components/Modal/Modal';

import { addProduct, deleteProduct } from 'redux/products/products.reducer';

import css from 'components/App.module.css';
import Filter from 'components/Filter/Filter';
import {
  selectFilteredProducts,
  selectProducts,
  selectProductsFilterTerm,
} from 'redux/products/products.selectors';
import { selectIsOpenModal } from 'redux/modal/modal.selectors';
import { useMemo, useState } from 'react';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const isOpenModal = useSelector(selectIsOpenModal);
  const products = useSelector(selectProducts);
  // const filterTerm = useSelector(selectProductsFilterTerm);
  const filteredProducts = useSelector(selectFilteredProducts);

  const handleDeleteProduct = productId => {
    dispatch(deleteProduct(productId));
  };

  const handleAddProduct = productData => {
    const hasDuplicates = products.some(
      product => product.title === productData.title
    );

    if (hasDuplicates) {
      alert(`Oops, produc with title '${productData.title}' already exists!`);
      return;
    }

    const finalProduct = {
      ...productData,
      id: nanoid(),
    };

    dispatch(addProduct(finalProduct));
  };

  // const filteredProducts = useMemo(() => {
  //   for(let i = 0; i < 3_000_000_000; i++) {}
  //   return products.filter(
  //     ({ price, title }) =>
  //       title.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
  //       price.toString().includes(filterTerm.toLowerCase().trim())
  //   );
  // }, [filterTerm, products]);

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => b.discount - a.discount
  );
  return (
    <div>
      <Section title="Add product Form">
        <ProductForm handleAddProduct={handleAddProduct} />
      </Section>
      <Section title="Filter Product">
        <Filter />
      </Section>
      <button onClick={() => setCounter(prev => prev + 1)}>
        Counter: {counter}
      </button>
      <Section title="Product List">
        <div className={css.productList}>
          {sortedProducts.map(product => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                discount={product.discount}
                handleDeleteProduct={handleDeleteProduct}
              />
            );
          })}
        </div>
      </Section>

      {isOpenModal && <Modal />}
    </div>
  );
};

export default ProductsPage;
