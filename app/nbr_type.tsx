import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import lyceesData from "../data/data_lycee.json";

const types = ["LP PR", "LPO", "LGT"];

export default function NbrType() {
  const [counts, setCounts] = useState<any[]>([]);

  useEffect(() => {
    const data = lyceesData;
    const computed = types.map((type) => ({
      type,
      count: data.filter((lycee) => lycee.sigle_uai === type).length,
    }));
    setCounts(computed);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Nombre par Type</Text>
      <View style={styles.grid}>
        {counts.map((item) => (
          <View key={item.type} style={styles.card}>
            <Text style={styles.value}>{item.count}</Text>
            <Text style={styles.label}>{item.type}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#333333",
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    width: "100%",
  },
  card: {
    width: "45%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  value: {
    fontSize: 32,
    fontFamily: "Poppins_700Bold",
    color: "#4A90E2",
    marginBottom: 4,
  },
  label: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#666666",
    textAlign: "center",
  },
});
