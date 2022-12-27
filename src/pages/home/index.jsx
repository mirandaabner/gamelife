import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import LifeStatus from "../../components/common/lifeStatus";
import StatusBar from "../../components/home/statusBar";
import CreateHabit from "../../components/home/createHabit";

export default function Home(){
    const navigation = useNavigation();
    const {mindHabit, setMindHabit} = useState();
    const {moneyHabit, setMoneyHabit} = useState();
    const {bodyHabit, setBodyHabit} = useState();
    const {funHabit, setFunHabit} = useState();

    function handleNavExplanation(){
        navigation.navigate("AppExplanation");
    };

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.dallyChecks}> &#x2764; 20 dias - &#x2713; 80 checks </Text>
                    <LifeStatus/> 
                    <StatusBar/>
                    <CreateHabit habitArea="Mente" borderColor={"#90B7F3"}/>
                </View>
                <Text 
                    style={styles.explanationText} 
                    onPress={() => {handleNavExplanation()}}
                >
                    Voltar
                </Text>
            
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(21, 21, 21, 0.98)",
        flex: 1,
    },
    dallyChecks:{
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginTop: 40,
    },
    explanationText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 15,
        marginBottom: 25,
    },
})