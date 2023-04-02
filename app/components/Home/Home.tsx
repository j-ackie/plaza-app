import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import Feed from "../Feed/Feed";

const Home = () => {
  // const [a, setA] = useState(0);

  return (
    <SafeAreaView>
      <Feed />
    </SafeAreaView>
  )
};

export default Home;