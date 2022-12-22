import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DefaultButton from "../../components/common/defaultButton";

export default function AppExplanation(){
    function handleSetShowHome(){
        console.log("Botão Home");
    }
    return(
        <View style={StyleSheet.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={StyleSheet.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na proxima tela você pode escolher {"\n"} seus habitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>        
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba{21, 21, 21, 0.98}",
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 40,
    },
    descriptionCta:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBotoom: 10,
    },
    description:{
        color: "white",
        textAlign: "center",
        marginBotoom: 30,
    },
});