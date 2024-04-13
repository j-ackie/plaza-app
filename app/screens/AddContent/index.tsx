import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UploadContent from './UploadContent';
import ListItem from './ListItem';
import Home from './Home';
import Library from './Library/index';
import AddProducts from './AddProducts';
import FinalTouches from './FinalTouches';

const Stack = createStackNavigator();

type AddContentProps = {
  setShowTabs: (bool: boolean) => void;
};

const AddContent: FC<AddContentProps> = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' },
        title: '',
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="uploadContent"
        component={UploadContent}
        options={{ headerTransparent: true }}
      />
      <Stack.Screen
        name="listItem"
        component={ListItem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="library"
        component={Library}
        options={{
          title: 'Gallery',
          headerStyle: { backgroundColor: 'white' },
        }}
      />
      <Stack.Screen
        name="addProducts"
        component={AddProducts}
        options={{ title: 'Add Products' }}
      />
      <Stack.Screen
        name="finalTouches"
        component={FinalTouches}
        options={{ title: 'Final Touches' }}
      />
    </Stack.Navigator>
  );
};

export default AddContent;
