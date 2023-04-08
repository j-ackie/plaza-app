import fetchData from "./utils";

const getCartItems = async(userID: string) => {
  try {
    const response = await fetchData(`/cartItems?userID=${userID}`, "GET");
    return await response.json();
  }
  catch (err) {
    console.error(err);
  }
};

export { getCartItems };