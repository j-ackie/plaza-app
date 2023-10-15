import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import { UserContext } from '~/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { cognitoPool } from '../../cognito-pool';

const LoginScreen = () => {
  const context = useContext(UserContext);

  const navigation = useNavigation();
  const onForgot = () => {
    navigation.navigate('forgotpassword');
  };

  const onRegister = () => {
    navigation.navigate('signup');
  };

  // Irrelevant code removed
  // See repo at the bottom of this article for the full code
  const onLogin = () => {
    const user = new CognitoUser({
      Username: 'example@gmail.com',
      Pool: cognitoPool,
    });
    context.setUser(user);
    const authDetails = new AuthenticationDetails({
      Username: 'example@gmail.com',
      Password: 'Password123!',
    });
    user.authenticateUser(authDetails, {
      onSuccess: async (res) => {
        // console.log(res)

        const refreshToken = res?.getRefreshToken().getToken();
        const accessToken = res?.getAccessToken().getJwtToken();
        await AsyncStorage.setItem('REFRESH_TOKEN', refreshToken);
        await AsyncStorage.setItem('ACCESS_TOKEN', accessToken);
        context.setAuth(accessToken);
        context.setRefresh(refreshToken);

        setTimeout(() => {
          navigation.navigate('tabs');
        }, 350);
      },
      onFailure: (err) => {
        switch (err.name) {
          case 'UserNotConfirmedException':
            console.log('User not confirmed');
            break;
          case 'NotAuthorizedException':
            console.log('Not authorized');
            break;
          default:
            console.log(err);
            break;
        }
      },
      newPasswordRequired: () => {
        console.log('HELLO');
      },
    });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          padding: '5%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('assets/favicon.png')}
          style={{ width: 100, height: 100 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Pressable onPress={onForgot} style={{ marginBottom: 12 }}>
            <Text style={{ color: 'gray' }}>Forgot Password?</Text>
          </Pressable>
        </View>

        <Pressable
          style={{
            width: '100%',
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}
          onPress={onLogin}
        >
          <Text>Login</Text>
        </Pressable>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ borderTopWidth: 1, flexGrow: 1 }}></View>
          <Text style={{ flexGrow: 0, padding: 10 }}>OR</Text>
          <View style={{ borderTopWidth: 1, flexGrow: 1 }}></View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Don't have an account? </Text>
          <Pressable onPress={onRegister}>
            <Text style={{ color: 'blue' }}>Sign Up.</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const LoginStack = createStackNavigator();

const Login = () => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="loginscreen" component={LoginScreen} />
      <LoginStack.Screen name="signup" component={Signup} />
      <LoginStack.Screen name="forgotpassword" component={ForgotPassword} />
    </LoginStack.Navigator>
  );
};

export default Login;
