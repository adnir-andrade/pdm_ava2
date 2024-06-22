import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {} & TouchableOpacityProps;

export default function LoginButton({ ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} testID="login-button" {...rest}>
      <ImageBackground
        source={require("../../assets/images/Login-6-16-2024.png")}
        style={styles.bg}
        resizeMode="contain"
      ></ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  bg: {
    height: 60,
  },
});
