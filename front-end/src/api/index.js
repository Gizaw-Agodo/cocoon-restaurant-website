import axios from "axios"
// import { logInFailure, logInStart, logInSuccess } from "../redux/userRedux"
const URL = axios.create({baseURL:"http://localhost:3001/"})


export const getProducts = async (cat,type) => {
  console.log({cat,type});
  try {
    const res = await axios.get(
      cat
        ? `http://localhost:3001/products?catagory=${cat}`
        : (type? `http://localhost:3001/products?type=${type}`
          :"http://localhost:3001/products")
    );
    // console.log(res);
    return res.data;
  } catch (err) {}
};

export const getProduct = async (productId) => {
  try {
        const res = await axios.get(
          `http://localhost:3001/products/${productId}` 
        );
        return res.data;
      } catch (err) {}
};

