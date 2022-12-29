import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function CreateHabit({ habitArea, borderColor }) {
  function handleCreate() {}

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, { borderColor: borderColor }]}
        onPress={handleCreate}
      >
        <Text style={styles.habitTitle}>
          Adcionar meta {habitArea === "Mente" ? "da" : "do"}{habitArea}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 315,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "white",
    borderRadius: 5,
    justfyContent: "center",
    alignItems: "center",
  },
  habitTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
