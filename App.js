import React from "react";
import {
  View,
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import AppBar from "./components/AppBar";

export default function App() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    if (text === "") {
      Alert.alert("Empty", "It can not be empty", ["Okay"]);
    }
    const newTodo = [...todos, { id: todos.length + 1, todo: text }];
    setTodos(newTodo);
    setText("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter Todo"
            onChangeText={(text) => setText(text)}
            value={text}
          />
        </View>
        <Buttons onClick={addTodo} />
      </View>
      <View style={styles.list}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {todos.map((todo) => {
            return <Cards key={todo.id} title={todo.todo} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    justifyContent: "center",
    alignItems: "center",
  },
  appContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    width: "80%",
    borderColor: "black",
    borderRadius: 25,
    marginVertical: 8,
  },
  input: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
