// Get search query param
function getSearchQueryParam(query) {
  const search = query.match(/search=([^&]*)/);
  return search ? search[1] : '';
}

export default {
  getSearchQueryParam,
};
