import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import lyceesData from "../data/data_lycee.json";

export default function Creteil() {
  const [creteilLycees, setCreteilLycees] = useState<any[]>([]);

  useEffect(() => {
    const data = lyceesData.filter(
      (lycee) => lycee.academie === "Créteil"
    );
    setCreteilLycees(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lycées de l'académie de Créteil</Text>
      <FlatList
        data={creteilLycees}
        keyExtractor={(item) => item.code_uai}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.nom_etablissement}</Text>
            <Text style={styles.meta}>{item.libelle}</Text>
            <Text style={styles.meta}>{item.statut}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e3e3e3",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  meta: {
    color: "#666",
  },
});
