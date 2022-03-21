import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
import Home from "./pages/Home/index";
import Animals from "./pages/Animals/index";
import AddAnimal from "./pages/AddAnimal/index";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animals" component={Animals} />
        <Stack.Screen name="AddAnimal" component={AddAnimal} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
