import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import lyceesData from "../data/data_lycee.json";

const parisRegionAcademies = ["Paris", "Versailles", "Créteil"];

export default function NbrParisLycee() {
  const [counts, setCounts] = useState<any[]>([]);

  useEffect(() => {
    const data = lyceesData;
    const computed = parisRegionAcademies.map((academy) => ({
      academy,
      count: data.filter((lycee) => lycee.academie === academy).length,
    }));
    setCounts(computed);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nombre de lycee par academie</Text>
      <Text style={styles.subtitle}>Region parisienne</Text>
      {counts.map((item) => (
        <View key={item.academy} style={styles.row}>
          <Text style={styles.label}>{item.academy}</Text>
          <Text style={styles.value}>{item.count}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    gap: 10,
    backgroundColor: "#f5f6f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    fontFamily: "Poppins_400Regular",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e2e4e8",
  },
  label: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  value: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});
