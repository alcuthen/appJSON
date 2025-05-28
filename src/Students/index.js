import { Text, View } from "react-native";

export default function Students(propos) {
    return (
        <View>
            <Text>
                {propos.data.name}
            </Text>
        </View>

    );
}