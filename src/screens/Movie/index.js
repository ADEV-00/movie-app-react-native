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
            <TouchableOpacity style={styles.btnPlay}>
              <Text>Play</Text>
            </TouchableOpacity>
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
  },
  btnPlay: {
    width: 62,
    height: 63,
    borderRadius: 10,
    backgroundColor: "#FECA32",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default MovieScreen;
