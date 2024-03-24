import { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface ButtonProps extends PressableProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
