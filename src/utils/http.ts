import axios from "axios";
import { getToken, clearToken } from "./token";
import router from "router";

const http = axios.create({
  // baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});
// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      //拼接方式：config.headers.Authorization = Bearer ${token}}
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // 删除token
      clearToken();
      // 跳转到登录页
      router.navigate("/login");
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// GET
export const get = async (url: string, params?: any, config?: any) => {
  return http
    .get(url, {
      params,
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

// POST
export const post = async (url: string, data?: any, config?: any) => {
  return http
    .post(url, data, {
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

// PUT
export const put = async (url: string, data?: any, config?: any) => {
  return http
    .put(url, data, {
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

// DEL
export const del = async (url: string, config?: any) => {
  return http
    .delete(url, {
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export default http;
