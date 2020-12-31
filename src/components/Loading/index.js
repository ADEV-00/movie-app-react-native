import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Loading = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ImageBackground
        source={require("../../assets/img/bg.png")}
        style={styles.bgImage}
      />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#0B2848",
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: width,
    height: height / 1.5,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    right: 0,
  },
  loading: {
    fontSize: 55,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 5,
  },
});

export default Loading;
