import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import lyceesData from "../data/data_lycee.json";

export default function VersaillesMails() {
  const [versaillesMails, setVersaillesMails] = useState<any[]>([]);

  useEffect(() => {
    const data = lyceesData.filter(
      (lycee) => lycee.academie === "Versailles" && !!lycee.mail
    );
    setVersaillesMails(data);
  }, []);

  const handlePressMail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={versaillesMails}
        keyExtractor={(item) => item.code_uai}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nom_etablissement}</Text>
            <TouchableOpacity onPress={() => handlePressMail(item.mail)} style={styles.mailContainer}>
              <Ionicons name="mail-outline" size={16} color="#4A90E2" style={{ marginRight: 8 }} />
              <Text style={styles.mail}>{item.mail}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  listContent: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#333333",
    marginBottom: 8,
  },
  mailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mail: {
    color: "#4A90E2",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
});
