import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
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
      <Text>
        We'll send a password reset request email to the specified email...
      </Text>

      <TextInput style={styles.input} placeholder="Email" />

      <Pressable onPress={() => {}}>
        <Text>Submit</Text>
      </Pressable>

      <Text>OR</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text>Did you remember your password? </Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: 'blue' }}>Log in.</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
