import React from 'react';
import { Link } from 'react-router-dom';
import {
  shape,
  string,
  number,
  bool,
} from 'prop-types';
// Styles
import './ProductInfo.scss';
// Assets
import shippingImage from '../../../../../assets/shipping.png';

export default function ProductInfo({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping: freeShipping,
  state_name: stateName,
}) {
  return (
    <Link to={`/items/${id}`} className="product-info__link">
      <div className="product-info__content">
        <img src={picture} alt={title} className="product-info__image" />
        <div className="product-info__desc">
          <p className="product-info__price">
            <span>{`$ ${price.amount}`}</span>
            {freeShipping && (
              <img src={shippingImage} alt="shipping free" />
            )}
          </p>
          <p className="product-info__text">{title}</p>
          <p className="product-info__text">{condition}</p>
        </div>
        <p className="product-info__state">{stateName}</p>
      </div>
    </Link>
  );
}

ProductInfo.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  price: shape({
    currency: number,
    amount: string,
  }).isRequired,
  picture: string.isRequired,
  condition: string.isRequired,
  free_shipping: bool.isRequired,
  state_name: string.isRequired,
};
