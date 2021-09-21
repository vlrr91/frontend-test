import axios from 'axios';

function getDescriptionProduct(data = {}) {
  const { plain_text: description } = data;
  return { description };
}

function getDataProduct(data = {}) {
  const {
    id,
    title,
    price,
    currency_id: currency,
    pictures,
    condition,
    shipping,
    sold_quantity: soldQuantity,
  } = data;
  const picture = pictures.length > 0 ? pictures[0].url : '';
  return {
    id,
    title,
    price: {
      currency,
      amount: price,
    },
    picture,
    condition,
    free_shipping: shipping.free_shipping,
    sold_quantity: soldQuantity,
  };
}

async function getProductDetails(id) {
  const detailUrl = `https://api.mercadolibre.com/items/${id}`;
  const descriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;
  const detailPromise = axios.get(detailUrl);
  const descriptionPromise = axios.get(descriptionUrl);
  // Fetch product details and product description
  const [detailData, descriptionData] = await Promise.all([detailPromise, descriptionPromise]);
  const itemInfo = getDataProduct(detailData.data);
  const itemDescription = getDescriptionProduct(descriptionData.data);
  return {
    item: { ...itemInfo, ...itemDescription },
  };
}

export default getProductDetails;
