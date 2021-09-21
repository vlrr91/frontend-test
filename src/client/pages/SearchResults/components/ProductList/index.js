import React from 'react';
import {
  arrayOf,
  shape,
  bool,
  string,
  number,
} from 'prop-types';
import ProductInfo from '../ProductInfo';
// Styles
import './ProductList.scss';

export default function ProductList({ items }) {
  return (
    <div className="product-list__content">
      {items.map((item) => (
        <ProductInfo key={item.id} {...item} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  items: arrayOf(shape({
    id: string,
    title: string,
    price: {
      currency: number,
      amount: string,
    },
    picture: string,
    condition: string,
    free_shipping: bool,
    state_name: string,
  })),
};

ProductList.defaultProps = {
  items: [],
};
