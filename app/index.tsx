import {SafeAreaView, StyleSheet, View, Image, FlatList, Text} from "react-native";
import {ThemedTexts} from "@/components/ThemedTexts";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Card} from "@/components/Card"
import {PokemonCard} from "@/components/pokemon/PokemonCard";
import {useFetchQuery} from "@/hooks/useFetchQuery";
import {getPokemon, getPokemonId} from "@/functions/pokemon";

// gérer le styles des composants. l'utiliser permet de gérer les syntaxes des styles
const styleSheets = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        padding: 12,
    },
    body: {
        flex: 1,
    },
    gridgap: {
        gap: 8,
    },
    list: {
        padding: 24,
    }
})
export default function Index() {
    const colors = useThemeColors()
    const {data} = useFetchQuery('/pokemon?limit=21')
    const pokemons = data?.results ?? []
  return (
    //   SafeAreaView rajoute automatiquement des paddings et placera correctement les éléments
    <SafeAreaView style={[styleSheets.container, {backgroundColor: colors.tint}]}>
        <View style={styleSheets.header}>
            <Image source={require("@/assets/images/pokeball.png")} width={24} height={24}/>
            <ThemedTexts variant="headline" color="grayDark">Pokedex</ThemedTexts>
        </View>
        <Card style={styleSheets.body}>
            <FlatList
                data={pokemons}
                numColumns={3}
                contentContainerStyle={[styleSheets.gridgap, styleSheets.list]}
                columnWrapperStyle={styleSheets.gridgap}
                renderItem={({item}) => <PokemonCard id={getPokemonId(item.url)} name={item.name} style={{flex: 1/3}}/>}
                keyExtractor={(item) => item.url}
            />
        </Card>
    </SafeAreaView>
  );
}
