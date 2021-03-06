import { userData } from '../../../../config/settings';
import { API_URL } from '../../../../config/linkApi';
const errorServerFail = 'Không kết nối được với máy chủ';

export function listProTypeApi(input) {
  return fetch(API_URL.getAllProductType, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      page: input.page,
      limit: input.limit,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return { status: -1, message: errorServerFail };
    });
}
export function listProductByTypeApi(input) {
  return fetch(API_URL.getListProductByType, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      ProTypeId: input.ProTypeId,
      page: input.page,
      limit: input.limit
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return { status: -1, message: errorServerFail };
    });
}
export function detailProductApi(input) {
  return fetch(API_URL.getDetailProduct, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      productId: input.productId,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return { status: -1, message: errorServerFail };
    });
}
export function searchApi(input) {
  return fetch(API_URL.search, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      searchKey: input.searchKey,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return { status: -1, message: errorServerFail };
    });
}