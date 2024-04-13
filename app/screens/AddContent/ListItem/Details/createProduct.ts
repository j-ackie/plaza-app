import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation createProduct($product: ProductCreateInput!) {
    createProduct(product: $product) {
      id
      sellerID
      name
      description
      price
      quantity
      imageURIs
    }
  }
`;

const useCreateProduct = () => useMutation(CREATE_PRODUCT);

export default useCreateProduct;
