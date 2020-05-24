import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

const WelcomeScreen = () => {
  return (
    <Screen>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
        blurRadius={10}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <AppText style={styles.tagline}>Sell What You Don't Need</AppText>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress={() => console.log("logn")} />
          <AppButton
            title="Register"
            onPress={() => console.log("Register")}
            color="secondary"
          />
        </View>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
