import { FC } from 'react';
import { Text, TextProps } from 'react-native';

const PlazaText: FC<TextProps> = (props) => {
  return <Text {...props}>{props.children}</Text>;
};

export default PlazaText;
