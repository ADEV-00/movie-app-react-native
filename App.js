import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
