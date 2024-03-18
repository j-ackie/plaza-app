import { UserContextProvider } from '@/contexts/UserContext';
import Navigation from '@/wrappers/Navigation';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const client = new ApolloClient({
  uri: process.env.EXPO_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Navigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </UserContextProvider>
    </ApolloProvider>
  );
};

export default App;
