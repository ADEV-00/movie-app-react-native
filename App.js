import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home";
import { Provider as MoviesProvider } from "./src/context/MovieContext";

export default function App() {
  return (
    <>
      <MoviesProvider>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </MoviesProvider>
    </>
  );
}

const styles = StyleSheet.create({});
