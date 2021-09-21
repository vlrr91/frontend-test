import ProductDetail from '../pages/ProductDetail';
import SearchBox from '../pages/SearchBox';
import SearchResults from '../pages/SearchResults';
import api from '../../shared/api';

const routes = [
  {
    path: '/',
    exact: true,
    component: SearchBox,
  },
  {
    path: '/items/:id',
    component: ProductDetail,
    fetchInitialData: (id) => api.getProductDetails(id),
    exact: true,
  },
  {
    path: '/items',
    exact: true,
    component: SearchResults,
    fetchInitialData: (search = '') => api.searchProducts(search),
  },
];

export default routes;
