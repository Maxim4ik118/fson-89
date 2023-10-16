import { Component } from 'react';
import { Product } from 'components/Product/Product';
import Section from 'components/Section/Section';

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
    counterValue: 0,
    products: productsData,
    showMessage: false,
    currentPage: 1,
  };

  handleIncrement = () => {
    // this.state.counterValue = this.state.counterValue + 1; ❌
    // this.setState({ counterValue: this.state.counterValue + 1 }); ✅
    // this.setState(state => { ✅
    //   return {
    //     counterValue: state.counterValue + 1,
    //   };
    // });
    this.setState({ counterValue: this.state.counterValue + 1 });
  };

  handleDecrement = () => {
    if (this.state.counterValue === 0) {
      alert('Please, stop! Counter value is already decremented!');
      return;
    }

    this.setState({ counterValue: this.state.counterValue - 1 });
  };

  handleDeleteProduct = productId => {
    // "3"
    // [{id: "1"}, {id: "2"}, {id: "3"}]
    // [{id: "1"}, {id: "2"}]
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  render() {
    const sortedProducts = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );
    return (
      <div>
        <Section>
          <h1>Hello FSON89🥳</h1>
          <button onClick={this.handleDecrement}>Decrement</button>
          <b>Counter value: {this.state.counterValue}</b>
          <button onClick={this.handleIncrement}>Increment</button>

          {this.state.counterValue >= 5 && (
            <div>
              Congrats! You won the discount promocode 20% OFF - #R3DW1E3🎉
            </div>
          )}
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
