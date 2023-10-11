import { Product } from './Product/Product';
import Section from './Section/Section';

import css from './App.module.css';

const productsData = [
  {
    id: '3',
    title: 'Tacos With Lime M',
    price: 5.85,
    discount: 15,
  },
  {
    id: '1',
    title: 'Tacos With Lime XXL',
    price: 10.99,
    discount: 30,
  },
  {
    id: '2',
    title: 'Tacos With Lime XL',
    price: 6.99,
    discount: null,
  },
  {
    id: '4',
    title: 'Tacos S',
    price: 1.5,
    discount: null,
  },
  {
    id: '5',
    title: 'Tacos With Cheese',
    price: 3.4,
    discount: 0.2,
  },
];

export const App = () => {
  return (
    <div>
      <Section>
        <h1>Hello FSON89🥳</h1>
      </Section>

      <Section title="Product List">
        <div className={css.productList}>
          {productsData.map(product => {
            return (
              <Product
                key={product.id}
                title={product.title}
                price={product.price}
                discount={product.discount}
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
};
