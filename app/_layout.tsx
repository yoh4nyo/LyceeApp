import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="creteil" options={{ title: "Creteil" }} />
      <Stack.Screen name="lycee_paris_prive" options={{ title: "Prives" }} />
      <Stack.Screen name="nbr_type" options={{ title: "Types" }} />
      <Stack.Screen name="versailles_mail_lycee" options={{ title: "Versailles" }} />
      <Stack.Screen name="nbr_paris_lycee" options={{ title: "Academies" }} />
    </Stack>
  );
}
