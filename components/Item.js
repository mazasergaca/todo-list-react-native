import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ItemTodo = ({ text, id, deleteTodo }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => deleteTodo(id)}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 80,
    paddingVertical: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
  },
  text: {
    color: "#000",
    fontSize: 22,
  },
});

export default ItemTodo;
