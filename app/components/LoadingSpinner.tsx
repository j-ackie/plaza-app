import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingSpinner;
