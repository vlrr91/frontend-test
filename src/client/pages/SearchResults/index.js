import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  shape, string, arrayOf, number, bool, func,
} from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import Loader from '../../components/Loader';
// Utils
import utils from '../../utils';
import ProductList from './components/ProductList';

export default function SearchResults({ staticContext, fetchInitialData }) {
  const [items, setItems] = useState(
    __isBrowser__ ? window.__INITIAL_DATA__.items : staticContext.data.items,
  );
  const [loading, setLoading] = useState(!items);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const search = utils.getSearchQueryParam(location.search);
      const { items: newItems } = await fetchInitialData(search);
      setItems(newItems);
      setLoading(false);
    }

    fetchData();
  }, [location.search, fetchInitialData]);

  return (
    <MainLayout>
      <ProductList items={items} />
      {loading && <Loader />}
    </MainLayout>
  );
}

SearchResults.propTypes = {
  staticContext: shape({
    data: shape({
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
    }),
  }).isRequired,
  fetchInitialData: func.isRequired,
};
