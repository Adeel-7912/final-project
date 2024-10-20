import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/splashIcon.png")} style={styles.image} />
      <Text style={styles.text}>Fruit Hub</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  smallImage: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 50,
    right: 50,
  },
});

export default SplashScreen;