import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Header } from "react-native-elements/dist/header/Header";

const AppBar = () => {
  return (
    <View style={styles.header}>
      <Header
        centerComponent={{
          text: "TODO App",
          style: {
            color: "black",
            fontWeight: "bold",
            fontSize: 20,
            paddingBottom: 10,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    marginTop: StatusBar.currentHeight || 0,
    padding: 15,
    paddingBottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  divider: {
    paddingTop: 10,
  },
});

export default AppBar;
