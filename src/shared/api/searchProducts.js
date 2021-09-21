import axios from 'axios';

const CATEGORY_ID = 'category';

function getCategories(data = []) {
  const categories = data.find((item) => item.id === CATEGORY_ID) || {};
  const categoriesValues = categories.values ? categories.values : [];
  return categoriesValues.map((category) => category.name);
}

function getItems(data = []) {
  return data.map(({
    id,
    title,
    price: amount,
    thumbnail,
    condition,
    shipping,
    seller_address: seller,
    currency_id: currency,
  }) => ({
    id,
    title,
    price: {
      currency,
      amount,
    },
    picture: thumbnail,
    condition,
    free_shipping: shipping.free_shipping,
    state_name: seller.state.name,
  })).slice(0, 4);
}

async function searchProducts(search) {
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`;
  const { data } = await axios.get(url);
  const categories = getCategories(data.available_filters);
  const items = getItems(data.results);
  return { categories, items };
}

export default searchProducts;
