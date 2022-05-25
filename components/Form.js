import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={value}
      />
      <Button onPress={() => createTodo(value, setValue)} title="add todo" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  input: {
    width: "60%",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "#fff",
  },
});

export default Form;
