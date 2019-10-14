import axios from 'axios';

const reqConfig = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

/**
 * 请求
 *
 * @param {string} url 接口文档上的url地址
 * @param {*} reqData 请求数据
 */
function post(url, reqData, config = reqConfig) {
  return axios
    .post(url, reqData, config)
    .then(response => response.data)
    .then(result => {
      // TODOS
      // 相关拦截code
      return result;
    })
    .catch(error => {
      throw new Error(error);
    });
}

function get(
  url,
  config = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  }
) {
  return axios({
    method: 'get',
    url,
    ...config,
  })
    .then(response => response.data)
    .then(result => {
      // TODOS
      // 相关拦截code
      return result;
    })
    .catch(error => {
      throw new Error(error);
    });
}

export function requestForm(
  url,
  reqData,
  config = {
    mimetype: 'multipart/form-data',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
) {
  const form = new FormData();
  Object.keys(reqData).forEach(item => {
    form.append(item, reqData[item]);
  });
  return axios
    .post(url, form, config)
    .then(response => response.data)
    .then(result => {
      // TODOS
      // 相关拦截code
      return result;
    })
    .catch(error => {
      throw new Error(error);
    });
}

export default { post, get, requestForm };
