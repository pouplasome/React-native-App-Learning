import {SafeAreaView, StyleSheet} from "react-native";
import {ThemedTexts} from "@/components/ThemedTexts";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Card} from "@/components/Card"

// gérer les styles des composants
const styles = {
    container: {
        backgroundColor: "#FFF000",
        paddingTop: 24,
    }
}
// gérer le styles des composants. l'utiliser permet de gérer les syntaxes des styles
const styleSheets = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default function Index() {
    const colors = useThemeColors()
  return (
    //   SafeAreaView rajoute automatiquement des paddings et placera correctement les éléments
    <SafeAreaView style={[styleSheets.container, {backgroundColor: colors.tint}]}>
        <Card>
            <ThemedTexts variant="headline" color="grayDark">Pokedex</ThemedTexts>
        </Card>
    </SafeAreaView>
  );
}
