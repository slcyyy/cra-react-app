/**
 * token 的持久化相关操作
 * 1. 拿到token的时候一式两份，存本地一份
2. 初始化的时候优先从本地取，取不到再初始化为控制
 */

const TOKEN_KEY = "ACCESS_TOKEN";

const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export { getToken, setToken, clearToken };
