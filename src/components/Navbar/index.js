import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <>
      <View style={styles.navbarWrapper}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>
          Movie App
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbarWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 80,
    zIndex: 100,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
});

export default Navbar;
