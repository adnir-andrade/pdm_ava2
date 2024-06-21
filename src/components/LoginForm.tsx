import { View, StyleSheet } from "react-native";
import Card from "../components/containers/Card";
import FormInput from "../components/FormInput";
import React, { SetStateAction } from "react";

type LoginFormProps = {
  username: string;
  password: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
};

export default function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
}: LoginFormProps) {
  return (
    <View style={styles.form}>
      <Card>
        <FormInput
          value={username}
          onChangeText={setUsername}
          placeholder="rickgrimes@twd.com"
        />
        <FormInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 50,
    height: 160,
  },
});
