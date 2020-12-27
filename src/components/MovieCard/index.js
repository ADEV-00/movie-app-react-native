import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MovieCard = ({ title, poster, rating, genres }) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardImg}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{ uri: poster }}
        />
      </View>
      <View style={styles.cardDetail}>
        <Text style={styles.movieTitle}>{title}</Text>
        <Text style={styles.movieRating}>
          <AntDesign name="star" size={15} color="#FECA32" />
          {rating}
        </Text>
        <Text style={styles.movieGenre}>{genres[0]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: 164,
    height: 261,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginLeft: 16,
  },
  cardImg: {
    width: "100%",
    height: "60%",
  },
  cardDetail: {
    padding: 16,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    height: 25,
    color: "#1A2E42",
    marginBottom: 4,
  },
  movieRating: {
    fontSize: 12,
    color: "#333333",
    marginBottom: 4,
  },
  movieGenre: {
    fontSize: 14,
    letterSpacing: 2,
    color: "#333333",
  },
});

export default MovieCard;
