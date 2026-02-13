import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import lyceesData from "../data/data_lycee.json";

const parisRegionAcademies = ["Paris", "Versailles", "Créteil"];

export default function LyceeParisPrive() {
  const [privesParis, setPrivesParis] = useState<any[]>([]);

  useEffect(() => {
    const data = lyceesData.filter(
      (lycee) =>
        lycee.statut === "privé" &&
        parisRegionAcademies.includes(lycee.academie)
    );
    setPrivesParis(data);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={privesParis}
        keyExtractor={(item) => item.code_uai}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>{item.nom_etablissement}</Text>
              <Text style={styles.academy}>{item.academie}</Text>
            </View>
            <Text style={styles.meta}>{item.libelle}</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#333333",
    flex: 1,
  },
  academy: {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    color: "#4A90E2",
    marginLeft: 8,
  },
  meta: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "Poppins_400Regular",
  },
});
