import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  string,
  shape,
  number,
  func,
} from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import Loader from '../../components/Loader';
// Styles
import './ProductDetail.scss';

export default function ProductDetail({ staticContext, fetchInitialData }) {
  const [item, setItem] = useState(
    __isBrowser__ ? window.__INITIAL_DATA__.item : staticContext.data.item,
  );
  const itemDetails = item || {};
  const [loading, setLoading] = useState(!item);
  const params = useParams();
  const {
    title,
    price,
    picture,
    condition,
    sold_quantity: soldQuantity,
    description,
  } = itemDetails;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { item: newItem } = await fetchInitialData(params.id);
      setItem(newItem);
      setLoading(false);
    }
    fetchData();
  }, [params, fetchInitialData]);

  return (
    <MainLayout>
      {itemDetails.id && (
        <div className="product-detail__card">
          <img src={picture} alt={title} className="product-detail__image" />
          <div className="product-detail__info">
            <p className="product-detail__condition">{`${condition} - ${soldQuantity} vendidos`}</p>
            <h2 className="product-detail__title">{title}</h2>
            <p className="product-detail__amount">{`$ ${price.amount}`}</p>
            <button className="product-detail__button" type="button">Comprar</button>
          </div>
          <div className="product-detail__desc">
            <h3>Descripción del producto</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
      {loading && <Loader />}
    </MainLayout>
  );
}

ProductDetail.propTypes = {
  staticContext: shape({
    data: shape({
      item: shape({
        id: string,
        title: string,
        price: shape({
          currency: string,
          amount: number,
        }),
        picture: string,
        condition: string,
        sold_quantity: number,
        description: string,
      }),
    }),
  }).isRequired,
  fetchInitialData: func.isRequired,
};
