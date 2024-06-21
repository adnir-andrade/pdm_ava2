import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";

type FormInput = {
  label?: string;
} & TextInputProps;

export default function FormInput({ label, ...rest }: FormInput) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[styles.container, focus && styles.focusContainer]}>
      {label && <Text style={[styles.label, styles.text]}>{label}</Text>}
      <TextInput
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[styles.input]}
        placeholderTextColor="rgba(77, 6, 7, 0.7)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    width: "100%",
    borderBottomColor: "#a60c0e",
    borderBottomWidth: 1,
    marginBottom: 17,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  focusContainer: {
    borderBottomColor: "#7d090b",
  },
  text: {
    color: "#a60c0e",
  },
  input: {
    fontWeight: "700",
    color: "rgb(77, 6, 7)",
    fontSize: 18,
  },
});
