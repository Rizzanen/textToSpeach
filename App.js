import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Speech from "expo-speech";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState();

  const speak = () => {
    Speech.speak(text);
  };

  const handleInputChange = (text) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          width: "80%",
          height: 40,
          borderWidth: 2,
          borderColor: "black",
        }}
        value={text}
        onChangeText={(text) => handleInputChange(text)}
      />
      <Pressable
        onPress={speak}
        style={{
          padding: 20,
          margin: 20,
          backgroundColor: "blue",
        }}
      >
        <Text style={{ color: "white" }}>Press to hear the text</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
