import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const links = [
  { href: "/creteil", label: "Lycées de l'académie de Creteil" },
  { href: "/lycee_paris_prive", label: "Lycées privés région parisienne" },
  { href: "/nbr_type", label: "Nombre par type (LP PR, LPO, LGT)" },
  { href: "/versailles_mail_lycee", label: "Mails académie de Versailles" },
  { href: "/nbr_paris_lycee", label: "Nombre par académie (région parisienne)" },
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LycéeApp</Text>
        <Text style={styles.subtitle}>Sélectionnez une catégorie</Text>
      </View>

      <View style={styles.list}>
        {links.map((item) => (
          <Link key={item.href} href={item.href as any} asChild>
            <TouchableOpacity style={styles.item} activeOpacity={0.7}>
              <Text style={styles.itemText}>{item.label}</Text>
            </TouchableOpacity>
          </Link>
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
    justifyContent: "center",
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: "Poppins_700Bold",
    color: "#2C3E50",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#7F8C8D",
  },
  list: {
    gap: 16,
  },
  item: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderLeftWidth: 6,
    borderLeftColor: "#4A90E2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#34495E",
  },
});
