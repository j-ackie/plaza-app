import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { UserContext } from '~/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import cognitoPool from '~/cognito-pool';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(UserContext);

  const navigation = useNavigation();
  const onForgot = () => {
    navigation.navigate('forgotpassword');
  };

  const onRegister = () => {
    navigation.navigate('signup');
  };

  const onLogin = () => {
    const user = new CognitoUser({
      Username: username,
      Pool: cognitoPool,
    });

    context.setUser(user);
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
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

        navigation.navigate('tabs');
      },
      onFailure: (err) => {
        console.log(err);
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
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
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

export default Login;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    // height: 40,
    margin: 12,
    padding: 15,
    borderWidth: 1,
    borderRadius: 20,
  },
});
