import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.title}>Nombre de lycée par type</Text>
      {counts.map((item) => (
        <View key={item.type} style={styles.row}>
          <Text style={styles.label}>{item.type}</Text>
          <Text style={styles.value}>{item.count}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e3e3e3",
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
});
