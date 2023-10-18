import { Component } from 'react';
import { nanoid } from 'nanoid';

// import { Product } from 'components/Product/Product';
// import Section from 'components/Section/Section';
// import ProductForm from './ProductForm/ProductForm';
import { Product, ProductForm, Section } from 'components';

import css from './App.module.css';

const productsData = [
  {
    id: 'Wdawdawd',
    title: 'Tacos With Lime M',
    price: 5.85,
    discount: 15,
  },
  {
    id: '312dwadawd',
    title: 'Tacos With Lime XXL',
    price: 10.99,
    discount: 30,
  },
  {
    id: '@#21dwdaw',
    title: 'Tacos With Lime XL',
    price: 6.99,
    discount: null,
  },
  {
    id: 'd12dsda@@!',
    title: 'Tacos S',
    price: 1.5,
    discount: null,
  },
  {
    id: 'DWafg32fd23f2',
    title: 'Tacos With Cheese',
    price: 3.4,
    discount: 0.2,
  },
];

export class App extends Component {
  state = {
    products: productsData,
  };

  handleDeleteProduct = productId => {
    // "3"
    // [{id: "1"}, {id: "2"}, {id: "3"}]
    // [{id: "1"}, {id: "2"}]
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  handleAddProduct = productData => {
    const hasDuplicates = this.state.products.some(
      product => product.title === productData.title
    );

    if (hasDuplicates) {
      alert(`Oops, produc with title '${productData.title}' already exists!`);
      return;
    }

    const finalProduct = { // Object.assign({ id: nanoid() }, productData)
      ...productData,
      id: nanoid(),
    };

    this.setState(prevState => ({
      products: [...prevState.products, finalProduct],
    }));
  };

  render() {
    const sortedProducts = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );
    return (
      <div>
        <Section>
          <h1>Hello FSON89🥳</h1>
        </Section>

        <Section title="Add product Form">
          <ProductForm handleAddProduct={this.handleAddProduct} />
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
                  handleDeleteProduct={this.handleDeleteProduct}
                />
              );
            })}
          </div>
        </Section>
      </div>
    );
  }
}
