import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const MovieScreen = () => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            minHeight: height,
            backgroundColor: "blue",
          }}
        >
          <View style={styles.bgWrapper}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/img/tenet.jpg")}
            />
          </View>
          <View style={styles.space}></View>
          <View style={styles.detailWrapper}>
            <View style={styles.detailHeader}>
              <View style={styles.titleWrapper}>
                <View>
                  <Text style={styles.rating}>
                    <AntDesign name="star" size={15} color="#FECA32" />
                    7.8
                  </Text>
                </View>
                <View>
                  <Text style={styles.movieTitle}>Tenet</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btnPlay}>
                <Text style={{ color: "white" }}>
                  {" "}
                  <FontAwesome5 name="play" size={20} color="white" />{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bgWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height / 1.6,
  },
  space: {
    width: width,
    height: height / 1.9,
  },
  detailWrapper: {
    backgroundColor: "white",
    borderRadius: 40,
    width: width,
    minHeight: "100%",
    position: "relative",
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  detailHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnPlay: {
    width: 62,
    height: 63,
    borderRadius: 10,
    backgroundColor: "#FECA32",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    transform: [{ translateY: -60 }, { translateX: -25 }],
  },
  rating: {
    color: "#FECA32",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    width: "82%",
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#1A2E42",
    maxWidth: "100%",
  },
});

export default MovieScreen;
