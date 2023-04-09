interface CartItem {
  _id: string;
  userID: string;
  itemID: string;
  quantity: number;
}

interface Item {
  _id: string;
  sellerID: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageURL: string;
  timestamp: string;
}

export { CartItem, Item };