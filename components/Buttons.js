import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";

const theme = {
  Button: {
    raised: true,
  },
};

const Buttons = ({ onClick }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Add"
        type="outline"
        onPress={onClick}
        buttonStyle={styles.button}
        titleStyle={{ color: "white" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    width: Dimensions.get("window").width < 425 ? 70 : 80,
    backgroundColor: "blue",
    borderRadius: 25,
  },
});

export default Buttons;
