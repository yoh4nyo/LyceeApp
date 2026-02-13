import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import lyceesData from "../data/data_lycee.json";

export default function VersaillesMails() {
  const [versaillesMails, setVersaillesMails] = useState<any[]>([]);

  useEffect(() => {
    const data = lyceesData.filter(
      (lycee) => lycee.academie === "Versailles" && !!lycee.mail
    );
    setVersaillesMails(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mails de chaque lycée de l'académie de Versailles</Text>
      <FlatList
        data={versaillesMails}
        keyExtractor={(item) => item.code_uai}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.nom_etablissement}</Text>
            <Text style={styles.mail}>{item.mail}</Text>
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
  mail: {
    color: "#444",
  },
});
