import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home";
import { Provider as MoviesProvider } from "./src/context/MovieContext";
import MovieScreen from "./src/screens/Movie";
import Navigation from "./src/navigation/index";

export default function App() {
  return (
    <>
      <MoviesProvider>
        <Navigation />
      </MoviesProvider>
    </>
  );
}

const styles = StyleSheet.create({});
