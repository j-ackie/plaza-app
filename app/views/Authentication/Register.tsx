import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import cognitoPool from '~/cognito-pool';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

const Register: React.FC = () => {
  const navigation = useNavigation();

  const initialValues = {
    name: '',
    username: '',
    password: '',
    repassword: '',
    email: '',
    reemail: '',
    phone: '',
    address: '',
  };

  const handleSubmit = (values) => {
    const emailAttribute = new CognitoUserAttribute({
      Name: 'email',
      Value: values.email,
    });

    const phoneAttribute = new CognitoUserAttribute({
      Name: 'phone_number',
      Value: values.phone,
    });

    cognitoPool.signUp(
      values.username,
      values.password,
      [emailAttribute, phoneAttribute],
      null,
      (err, data) => {
        if (err) {
          switch (err.name) {
            case 'InvalidParameterException':
              console.log(err);
              break;
            case 'InvalidPasswordException':
              console.log('Invalid password');
              break;
            case 'UsernameExistsException':
              console.log('Username exists already');
              break;
            default:
              console.log('Something went wrong');
          }
          return;
        }

        navigation.navigate('login');
      }
    );
  };

  return (
    <SafeAreaView>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <ScrollView
              contentContainerStyle={{
                width: '100%',
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
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Full name"
              />

              <TextInput
                style={styles.input}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Username"
              />

              {/* Password requirements
                  Contains at least 1 number
                  Contains at least 1 special character
                  Contains at least 1 uppercase letter
                  Contains at least 1 lowercase letter */}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
              />

              <TextInput
                style={styles.input}
                onChangeText={handleChange('repassword')}
                onBlur={handleBlur('repassword')}
                value={values.repassword}
                placeholder="Re-type password"
              />

              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Email"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                placeholder="Phone number"
              />

              <TextInput
                style={styles.input}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                placeholder="Address"
              />
            </ScrollView>
            <Pressable
              onPress={handleSubmit}
              style={{
                width: '100%',
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
              }}
            >
              <Text>Submit</Text>
            </Pressable>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ borderTopWidth: 1, flexGrow: 1 }}></View>
              <Text style={{ flexGrow: 0, padding: 10 }}>OR</Text>
              <View style={{ borderTopWidth: 1, flexGrow: 1 }}></View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <Text>Have an account? </Text>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={{ color: 'blue' }}>Log in.</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
