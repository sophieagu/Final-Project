import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const Navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Text style = {bolds.container}>Welcome Back! Choose an option below:</Text> <br></br>
            <Button title="Update Cycle Information" onPress={() => Navigation.navigate('CycleForm')} Button/> <br></br>
            <Button title="My Calendar"  onPress={() => Navigation.navigate('CalendarScreen')} Button/> <br></br> <br></br>
            <Text>Select a Phase:</Text> <br></br>
            <Button title="Menstruation"  onPress={() => Navigation.navigate('PhaseScreen')} Button/> <br></br>                
            <Button title="Follicular Phase"  onPress={() => Navigation.navigate('PhaseScreen')} Button/> <br></br>
            <Button title="Ovulation" onPress={() => Navigation.navigate('PhaseScreen')} Button/> <br></br>
            <Button title="Luteal Phase" onPress={() => Navigation.navigate('PhaseScreen')} Button/> <br></br>
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

  const bolds = StyleSheet.create({
    container: {
      flex: 1,
      fontWeight: "bold",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default HomeScreen;