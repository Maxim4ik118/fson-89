import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { Product, ProductForm, Section } from 'components';
import Modal from 'components/Modal/Modal';

import { addProduct, deleteProduct } from 'redux/products/products.reducer';

import css from 'components/App.module.css';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const isOpenModal = useSelector(state => state.modal.isOpenModal);
  const products = useSelector(state => state.productsStore.products);


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

  const sortedProducts = [...products].sort((a, b) => b.discount - a.discount);
  return (
    <div>
      <Section title="Add product Form">
        <ProductForm handleAddProduct={handleAddProduct} />
      </Section>

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
