import react from "react";
import { View, Text, TextInput} from "react-native";

export default function Form(){
    return(
    <View>

    <View>
    <text>Altura</text>
    <TextInput
    placeholder="Ex.1.75"
    keyboardType="numeric"
/>
    <text>Peso</text>
    <TextInput
    placeholder="Ex. 85.766"
    keyboardType="numeric"
    />
    </View>  

    </View>
    );
}