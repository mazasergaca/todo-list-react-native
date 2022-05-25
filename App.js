import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Title from "./components/Title";
import Form from "./components/Form";
import ListItems from "./components/ListItems";

export default function App() {
  const [items, setItems] = useState([{ text: "todo1", id: 1 }]);

  const createTodo = (text, setValue) => {
    setItems([...items, { text, id: String(new Date().getTime()) }]);
    setValue("");
  };

  const deleteTodo = (id) => {
    const filterItems = items.filter((todo) => todo.id !== id);
    setItems(filterItems);
  };

  return (
    <View style={styles.container}>
      <Title />
      <Form createTodo={createTodo} />
      <ListItems items={items} deleteTodo={deleteTodo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
