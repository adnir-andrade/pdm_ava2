import { Button, View, StyleSheet, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import Card from "../components/containers/Card";
import FormInput from "../components/FormInput";
import { useGlobalSearchParams, useRouter } from "expo-router";
import api from "../services/api";

export default function update() {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  useEffect(() => {
    const fetchSurvivor = async () => {
      try {
        const response = await api.get(`/survivors/${params.id}`);
        const survivorData = response.data;
        setName(survivorData.name);
        setAge(survivorData.age);
        setGender(survivorData.gender);
      } catch (error) {
        console.log("Error on update");
        console.error("Error fetching survivor:", error);
      }
    };

    fetchSurvivor();
  }, []);

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleAgeChange = (age: number | string) => {
    setAge(Number(age));
  };

  const handleGenderChange = (type: string) => {
    setGender(type);
  };

  const handleSubmit = async () => {
    try {
      console.log(age);
      await api.patch(`/survivors/${params.id}`, {
        name,
        age,
        gender,
      });
      router.push("/list");
    } catch (error) {
      console.error("Error updating survivor:", error);
    }
  };

  return (
    <Background>
      <HeaderWithTitle title="Update" />
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
            value={age.toString()}
            onChangeText={handleAgeChange}
            placeholder="Age"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
          <FormInput
            label="Gender"
            value={gender}
            onChangeText={handleGenderChange}
            placeholder="Cat"
            placeholderTextColor="#999"
          />
          <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Edit Survivor</Text>
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
    height: 325,
    margin: 25,
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
