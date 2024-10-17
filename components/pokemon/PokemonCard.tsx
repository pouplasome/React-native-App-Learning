import {ViewStyle, Image, StyleSheet, View} from "react-native";
import {Card} from "@/components/Card";
import {ThemedTexts} from "@/components/ThemedTexts";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = {
    style?: ViewStyle; // Le style est optionnel "?"
    id: number;
    name: string;
}

export function PokemonCard({style, id, name}: Props) {
    const colors = useThemeColors()
    return (
        <Card style={[style, styles.card]}>
            <ThemedTexts style={styles.id} variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedTexts>
            <Image
                source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                width={72}
                height={72}
            />
            <ThemedTexts>{name}</ThemedTexts>
            <View style={[styles.shadow, {backgroundColor: colors.backgroundColor}]}/>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        position: "relative",
        alignItems: "center",
        padding: 4,
    },
    id: {
        alignSelf: "flex-end",
    },
    shadow: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderRadius: 7,
        zIndex: -1,
    }
})