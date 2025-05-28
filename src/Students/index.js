import { Text, View } from "react-native";

export default function Students(propos) {
    return (
        <View>
            <Text>

                {/* estudantes */}
                {propos.data.name}
            </Text>
        </View>

    );
}