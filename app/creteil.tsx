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
      <FlatList
        data={creteilLycees}
        keyExtractor={(item) => item.code_uai}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>{item.nom_etablissement}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.statut}</Text>
              </View>
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
    alignItems: "flex-start",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#333333",
    flex: 1,
    marginRight: 8,
  },
  meta: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "Poppins_400Regular",
  },
  badge: {
    backgroundColor: "rgba(74, 144, 226, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#4A90E2",
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
  },
});
