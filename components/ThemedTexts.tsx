import {StyleSheet, Text, TextProps} from "react-native";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Colors} from "@/constants/Colors";

const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16,
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    subtitle1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    subtitle2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    subtitle3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: 'bold',
    },
});

type Props = TextProps & {
    variant?: keyof typeof styles;
    color?: keyof typeof Colors["light"];
}

export function ThemedTexts({ variant = 'body3', color, style, ...rest }: Props) {
    const colors = useThemeColors();

    return (
        <Text
            style={[
                styles[variant],
                { color: colors[color] ?? 'grayDark' },
                style // Pass the style as part of the array
            ]}
            {...rest} // Spread remaining TextProps
        />
    );
}
