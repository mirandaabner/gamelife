import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function EditHabit({ habit, frequency, habitArea, checkColor }) {
  function handleEdit() {}
  function handleCheck() {}

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={handleEdit}
      >
        <View style={styles.habitText}>
          <Text style={styles.habitTitle}>{habit}</Text>
          <Text style={styles.habitFrequency}>{frequency}</Text>
          <Text style={styles.habitFrequency}>{habitArea}</Text>
        </View>
        <TouchableOpacity
          style={[styles.check, { borderColor: checkColor }]}
          onPress={handleCheck}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#151515",
    borderRadius: 5,
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justfyContent: "space-between",
  },
  habitTitle: {
    color: "white",
    fontWeight: "bold",
  },
  habitFrequency: {
    color: "white",
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
  },
});
