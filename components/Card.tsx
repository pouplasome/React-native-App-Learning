import {View, type ViewProps, type ViewStyle} from "react-native";
import {Shadows} from "@/constants/Shadows";
import {useThemeColors} from "@/hooks/useThemeColors";


type Props = ViewProps

export function Card({style, ...reset}: Props) {
    const colors = useThemeColors()
    return <View style={[style, styles, {backgroundColor: colors.grayWhite}]} {...reset}/>
}

const styles: ViewStyle = {
    borderRadius: 8, // Example value
    overflow: 'hidden',
    backgroundColor: '#fff', // Correct property for background color
    ...Shadows.dp2
};
