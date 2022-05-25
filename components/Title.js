import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    padding: 5,
    fontSize: 26,
    textAlign: "center",
  },
});

export default Title;
