import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import Card from "../components/containers/Card";
import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import api from "../services/api";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Survivor = {
  id?: string;
  name: string;
  age: number;
  gender: string;
  is_alive: string;
};

export default function list() {
  const app = useContext(AppContext);
  const [data, setData] = useState<Survivor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/survivors");

        const sortedData = response.data.survivors.sort(
          (a: Survivor, b: Survivor) => {
            return parseInt(a.id!) - parseInt(b.id!);
          }
        );

        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id: string | undefined) => {
    router.navigate(`/update?id=${id}`);
  };

  const renderItem = ({ item }: { item: Survivor }) => (
    <View style={styles.container}>
      <Card>
        <Text style={[styles.text, { color: app!.textColor }]}>
          ID: {item.id}
        </Text>
        <Text style={[styles.text, { color: app!.textColor }]}>
          Name: {item.name}
        </Text>
        <Text style={[styles.text, { color: app!.textColor }]}>
          Age: {item.age}
        </Text>
        <Text style={[styles.text, { color: app!.textColor }]}>
          Gender: {item.gender}
        </Text>
        <Text style={[styles.text, { color: app!.textColor }]}>
          Status: {item.is_alive}
        </Text>
        <Pressable onPress={() => handleEdit(item.id)}>
          <Ionicons name="pencil" size={24} color="black" />
        </Pressable>
      </Card>
    </View>
  );

  return (
    <Background>
      <HeaderWithTitle title="" />
      {loading ? (
        <Text style={[styles.text, { color: app!.textColor }]}>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id?.toString() ?? ""}
          renderItem={renderItem}
        />
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 40,
    height: 250,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
