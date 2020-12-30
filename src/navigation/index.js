import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "../screens/Home";
import MovieScreen from "../screens/Movie";
import SimilarMovieScreen from "../screens/SimilarMovie";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SimilarMovie"
          component={SimilarMovieScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
