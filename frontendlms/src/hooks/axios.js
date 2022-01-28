import axios from "axios";
import Cookies from "js-cookie";

export const request = axios.create({
  //   baseURL: process.env.REACT_BASE_API_URL,
  baseURL: "https://studentinfopopy.herokuapp.com/api",
  // headers: { Authorization: `Bearer ${Cookies.get("login-token")}` },
});

export const getData = async (url) => {
  try {
    const { data } = await request.get(`${url}`, {
      headers: { Authorization: `Bearer ${Cookies.get("login-token")}` },
    });
    return data;
  } catch (err) {
    return err.message;
  }
};

export const postData = async (url, post) => {
  try {
    const { data } = await request.post(`${url}`, {
      ...post,
    });
    return data;
  } catch (err) {
    return err.message;
  }
};

export const putData = async (url, post) => {
  try {
    await request.put(`${url}`, {
      ...post,
    });
    // return data;
  } catch (err) {
    return err.message;
  }
};

export const patchData = async (url, post) => {
  try {
    await request.put(`${url}`, {
      ...post,
    });
    // return data;
  } catch (err) {
    return err.message;
  }
};

export const deleteData = async (url) => {
  try {
    await request.delete(url);
  } catch (err) {
    return err.message;
  }
};
