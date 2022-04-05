import axios from "axios";
import { PRODUCT_ACTIONS } from "./constants";
import { API_TO_GET_ALL_PRODUCTS, API_TO_GET_ALL_CATEGORIES } from "./apis";

export const getProducts = async (dispatch) => {
  dispatch({
    type: PRODUCT_ACTIONS.LOADING,
    payload: true,
  });
  try {
    const response = await axios.get(API_TO_GET_ALL_PRODUCTS);
    dispatch({
      type: PRODUCT_ACTIONS.SET_PRODUCTS,
      payload: response.data.products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ACTIONS.ERROR,
      payload: "Something Went Wrong",
    });
  } finally {
    dispatch({
      type: PRODUCT_ACTIONS.LOADING,
      payload: false,
    });
  }
};

export const getCategories = async (dispatch) => {
  dispatch({
    type: PRODUCT_ACTIONS.LOADING,
    payload: true,
  });
  try {
    const response = await axios.get(API_TO_GET_ALL_CATEGORIES);
    dispatch({
      type: PRODUCT_ACTIONS.SET_CATEGORIES,
      payload: response.data.categories,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ACTIONS.ERROR,
      payload: "Something Went Wrong",
    });
  } finally {
    dispatch({
      type: PRODUCT_ACTIONS.LOADING,
      payload: false,
    });
  }
};
