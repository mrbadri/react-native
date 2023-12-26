import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [number, onChangeNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.content}>{number + count}</Text>
      <Button onPress={() => setCount(count + 1)} title="+" />
      <Button onPress={() => setCount(count - 1)} title="-" />
      <StatusBar style="auto" />
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <TextInput />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      />
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
  content: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
