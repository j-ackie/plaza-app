import { View, Text } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import ProductVideo from './ProductVideo';
import ProductInfo from './ProductInfo';
import ProductDelivery from './ProductDelivery';

const CartCarousel = ({item}) => {
  console.log(item)
  return (
    <Carousel
      vertical={false}
      width={330}
      height={450}
      data={[...new Array(3).keys()]}
      loop={false}
      renderItem={({ index }) => {
        switch (index) {
          case 0:
            return <ProductDelivery selected={item}></ProductDelivery>;
          case 1:
            return <ProductInfo productID={item.productID}></ProductInfo>;
          case 2:
            return (
              <ProductVideo
                videoIndex={0}
                currViewableIndex={0}
                postInfo={parseInt(item.videoID)}
              />
            );
        }
      }}
    />
  );
};

export default CartCarousel;
