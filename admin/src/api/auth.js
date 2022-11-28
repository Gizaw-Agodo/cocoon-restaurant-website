import axios from "axios";
import { logInFailure, logInStart, logInSuccess } from "../redux/authRedux";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "../redux/productRedux";
const URL = axios.create({ baseURL: "http://localhost:3001/" });

const token = JSON.parse(localStorage.getItem("user")).token;

// log in request
export const login = async (dispatch, user) => {
  dispatch(logInStart());
  try {
    const response = await URL.post("auth/logIn", user);
    localStorage.setItem("user", JSON.stringify(response.data));
    dispatch(logInSuccess(response.data));
  } catch (error) {
    dispatch(logInFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await axios.get("http://localhost:3001/products");
    dispatch(getProductsSuccess(res.data))
    return res.data;
  } catch (err) {
    dispatch(getProductsFailure)
  }
};

export const getProduct = async (productId) => {
  try {
    const res = await axios.get(`http://localhost:3001/products/${productId}`);
    return res.data;
  } catch (err) {}
};

/// users api
export const getUsers = async () => {
  try {
    const res = await axios.get(`http://localhost:3001/users`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    console.log("gama", res);
    return res.data;
  } catch (err) {}
};
