import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home";
import { Provider as MoviesProvider } from "./src/context/MovieContext";
import MovieScreen from "./src/screens/Movie";

export default function App() {
  return (
    <>
      <MoviesProvider>
        <SafeAreaView>
          {/*  <HomeScreen /> */}
          <MovieScreen />
        </SafeAreaView>
      </MoviesProvider>
    </>
  );
}

const styles = StyleSheet.create({});
