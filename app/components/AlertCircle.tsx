import { FC } from 'react';
import { View } from 'react-native';

type AlertCircleProps = {
  size: number;
};

const AlertCircle: FC<AlertCircleProps> = ({ size }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: 'red',
      }}
    />
  );
};

export default AlertCircle;
