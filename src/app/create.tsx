import { Button, View, StyleSheet, Pressable, Text } from "react-native";
import React, { useState } from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import Card from "../components/containers/Card";
import { useRouter } from "expo-router";
import FormInput from "../components/FormInput";
import api from "../services/api"; // Certifique-se de importar Axios configurado

type Survivor = {
  id?: string;
  name: string;
  age: number;
  gender: string;
  longitude: number;
  latitude: number;
};

export default function Create() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleAgeChange = (age: string) => {
    setAge(age);
  };

  const handleGenderChange = (gender: string) => {
    setGender(gender);
  };

  const handleLongitudeChange = (longitude: string) => {
    setLongitude(longitude);
  };

  const handleLatitudeChange = (latitude: string) => {
    setLatitude(latitude);
  };

  const handleSubmit = async () => {
    try {
      const newSurvivor: Survivor = {
        name,
        age: parseInt(age, 10),
        gender,
        longitude: parseFloat(longitude),
        latitude: parseFloat(latitude),
      };
      await api.post("/survivors", newSurvivor);
      router.push("/list");
    } catch (error) {
      console.error("Error creating survivor:", error);
    }
  };

  return (
    <Background>
      <HeaderWithTitle title="Create" />
      <View style={styles.view}>
        <Card>
          <FormInput
            label="Name"
            value={name}
            onChangeText={handleNameChange}
            placeholder="Rick Grimes"
            placeholderTextColor="#999"
          />
          <FormInput
            label="Age"
            value={age}
            onChangeText={handleAgeChange}
            placeholder="Age"
            keyboardType="numeric"
          />
          <FormInput
            label="Gender"
            value={gender}
            onChangeText={handleGenderChange}
            placeholder="Cat"
            placeholderTextColor="#999"
          />
          <FormInput
            label="Longitude"
            value={longitude}
            onChangeText={handleLongitudeChange}
            placeholder="Longitude"
            keyboardType="numeric"
          />
          <FormInput
            label="Latitude"
            value={latitude}
            onChangeText={handleLatitudeChange}
            placeholder="Latitude"
            keyboardType="numeric"
          />
          <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create Survivor</Text>
          </Pressable>
        </Card>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  list: {
    color: "#fff",
  },
  view: {
    height: 475,
    margin: 25,
    paddingHorizontal: 20,
  },
  container: {
    padding: 4,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 13,
  },
  focusContainer: {
    borderBottomColor: "#cdab8f",
  },
  text: {
    color: "#cdab8f",
  },
  buttonContainer: {
    backgroundColor: "#2e0304",
    width: 250,
    borderRadius: 30,
    paddingHorizontal: 16,
    marginVertical: 5,
    alignSelf: "center",
  },
  buttonText: {
    paddingVertical: 8,
    marginVertical: 8,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
