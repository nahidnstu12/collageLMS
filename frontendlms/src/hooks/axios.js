import axios from "axios";
import Cookies from "js-cookie";

export const request = axios.create({
  //   baseURL: process.env.REACT_BASE_API_URL,
  baseURL: "https://studentinfopopy.herokuapp.com/api",
  // headers: { Authorization: `Bearer ${Cookies.get("login-token")}` },
});
/**
 *  Get Request
 * @param {string} url
 * @returns {array} data
 */
export const getData = async (url) => {
  try {
    const { data } = await request.get(`${url}`, {
      headers: { Authorization: `Bearer ${Cookies.get("login-token")}` },
    });
    return data;
  } catch (err) {
    return err;
  }
};
/**
 * Post Request
 * @param {string} url
 * @param {object} post
 *
 */
export const postData = async (url, post) => {
  try {
    const { data } = await request.post(`${url}`, {
      ...post,
    });
    return data;
  } catch (err) {
    return err;
  }
};
/**
 * Put Request
 * @param {string} url
 * @param {object} post
 * @returns
 */
export const putData = async (url, post) => {
  try {
    const { data } = await request.put(`${url}`, {
      ...post,
    });
    return data;
  } catch (err) {
    return err;
  }
};
/**
 * Patch Request
 * @param {string} url
 * @param {object} post
 * @returns
 */
export const patchData = async (url, post) => {
  try {
    await request.put(`${url}`, {
      ...post,
    });
    // return data;
  } catch (err) {
    return err;
  }
};
/**
 * Delete Request
 * @param {string} url
 * @returns
 */
export const deleteData = async (url) => {
  try {
    await request.delete(url);
  } catch (err) {
    return err;
  }
};
