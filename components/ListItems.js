import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ItemTodo from "./Item";

const ListItems = ({ items, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ItemTodo
            key={item.id}
            text={item.text}
            id={item.id}
            deleteTodo={deleteTodo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default ListItems;
