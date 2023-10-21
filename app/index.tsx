import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PortalProvider } from '@gorhom/portal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import Home from '~/views/Home/Home';
import ShoppingCartOrderScreen from '~/views/ShoppingCartOrderScreen/ShoppingCartOrderScreen';
import { Audio } from 'expo-av';
import AddContent from './views/AddContent';
import Profile from './views/Profile';
import Inbox from './views/Inbox';
import Authentication from './views/Authentication';
import UserContextProvider, { UserContext } from './UserContext';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// https://reactnavigation.org/docs/material-bottom-tab-navigator
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = ({ navigation }) => {
  // const tabNames = ['home', 'cart', 'create', 'inbox', 'profile'];
  // const tabComponents = [Home, ShoppingCartOrderScreen, AddContent, Home, Home];

  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        height: 80,
      }}
      // https://callstack.github.io/react-native-paper/
      // https://stackoverflow.com/questions/75013007/how-to-remove-this-white-ovale-behind-the-focused-in-the-material-bottom-tabs-na
      // edit theme later

      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let name = '';
          switch (route.name) {
            case 'home': {
              name = 'home';
              break;
            }
            case 'cart': {
              name = 'cart';
              break;
            }
            case 'dummy-create': {
              name = 'plus-circle-outline';
              break;
            }
            case 'inbox': {
              name = 'mailbox-open';
              break;
            }
            case 'profile': {
              name = 'account-circle';
              break;
            }
          }

          return <MaterialCommunityIcons name={name} size={30} />;
        },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cart" component={ShoppingCartOrderScreen} />
      <Tab.Screen
        name="dummy-create"
        component={() => null}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('create');
          },
        }}
      />
      <Tab.Screen name="inbox" component={Inbox} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

const getToken = async () => {
  const token = await AsyncStorage.getItem('ACCESS_TOKEN');

  return token ? `Bearer ${token}` : '';
};

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:8000/',
    connectionParams: async () => {
      return {
        authorization: await getToken(),
      };
    },
  })
);

const authLink = setContext(async (_, headers) => {
  console.log('authLink');

  return {
    headers: {
      ...headers,
      authorization: await getToken(),
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});

const App = () => {
  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <PortalProvider>
          <StatusBar style="light" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              // container
            }}
          >
            <Stack.Screen name="authentication" component={Authentication} />
            <Stack.Screen name="tabs" component={TabNavigator} />
            <Stack.Screen name="create" component={AddContent} />
          </Stack.Navigator>
        </PortalProvider>
      </UserContextProvider>
    </ApolloProvider>
  );
};

export default App;
