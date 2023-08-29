import { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type BoldProps = {
  children: ReactNode;
  size?: number;
};

const Bold: FC<BoldProps> = ({ children, size }) => {
  return (
    <Text
      style={[
        styles.bold,
        {
          fontSize: size ?? 14,
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default Bold;

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
});
