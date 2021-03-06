import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

const Cards = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>{props.title}</Card.Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get("window").width - 80,
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: Dimensions.get("window").width < 425 ? 25 : 40,
  },
  card: {
    width: "100%",
  },
  cardTitle: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default Cards;
