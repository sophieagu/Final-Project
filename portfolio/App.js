import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CycleForm from ".src/components/CycleForm";

export default function App() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Navigation.Navigator initialRouteName="Home">
        <Navigation.Screen name="Home" component={HomeScreen} />
        <Navigation.Screen name="CycleForm" component={CycleForm} />
        <Navigation.Screen name="PhaseScreen" component={ToDoScreen} />
        <Navigation.Screen name="CalendarScreen" component={CalendarScreen} />
      </Navigation.Navigator>
    </NavigationContainer>
      <Text>Welcome Back! Choose an option below:</Text> <br></br>
      <Button title="Edit Form" onPress={() => Navigation.navigate('CycleForm')} Button/> <br></br>
      <Button title="My Calendar" Button/> <br></br> <br></br>
      <Text>Select a Phase:</Text> <br></br>
      <Button title="Menstruation" Button/> <br></br>
      <Button title="Follicular Phase" Button/> <br></br>
      <Button title="Ovulation" Button/> <br></br>
      <Button title="Luteal Phase" Button/> <br></br>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
