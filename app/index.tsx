import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const links = [
  { href: "/creteil", label: "Lycées de l'académie de Creteil" },
  { href: "/lycee_paris_prive", label: "Lycées privés région parisienne" },
  { href: "/nbr_type", label: "Nombre par type (LP PR, LPO, LGT)" },
  { href: "/versailles_mail_lycee", label: "Mails académie de Versailles" },
  { href: "/nbr_paris_lycee", label: "Nombre par académie (région parisienne)" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LycéeApp</Text>
      <View style={styles.list}>
        {links.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={styles.item}>
              <Text style={styles.itemText}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
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
    marginBottom: 16,
  },
  list: {
    gap: 10,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e3e3e3",
  },
  itemText: {
    fontSize: 16,
  },
});
