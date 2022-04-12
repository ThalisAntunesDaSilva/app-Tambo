import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
import Home from "./pages/Home/index";
import Animals from "./pages/MenuAnimals/Animals/index";
import AddAnimal from "./pages/MenuAnimals/AddAnimal/index";
import Reproductions from './pages/MenuReproduction/Reproductions/index';
import Vaccines from './pages/MenuVaccine/Vaccines/index';
import AddReproductions from './pages/MenuReproduction/AddReproductions/index';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animals" component={Animals} />
        <Stack.Screen name="AddAnimal" component={AddAnimal} />  
        <Stack.Screen name="Reproductions" component={Reproductions} />
        <Stack.Screen name="AddReproductions" component={AddReproductions} />  
       <Stack.Screen name="Vaccines" component={Vaccines} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
