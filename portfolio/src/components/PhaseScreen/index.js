import React, {useState} from "react";
import { StyleSheet, Text, Button, View, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PhaseScreen = ( {route} ) => {
    const { phase, avgPeriodLength, avgCycleLength } = route.params;
    const [currentPhase, setCurrentPhase] = useState("");

    const menstruationWorkouts = [
        {title: "Walking", type: "Duration"},
        {title: "Yoga", type: "Duration"},
        {title: "Pilates", type: "Duration"}
    ];

    const follicularWorkouts = [
        {title: "Jumping Jacks", type: "Repetition"},
        {title: "Pushups", type: "Repetition"},
        {title: "BenchPress", type: "Repetition"},
        {title: "Squats", type: "Repetition"},
        {title: "Running", type: "Duration"}
    ];

    const ovulationWorkouts = [
        {title: "Running", type: "Duration"},
        {title: "Plank", type: "Duration"},
        {ttle: "Pushups", type: "Repetition"},
        {title: "Jumping Jacks", type: "Repetition"}
    ];

    const lutealWorkouts = [
        {title:"Jogging", type: "Duration"},
        {title: "Walking", type: "Duration"},
        {title: "Yoga", type: "Duration"},
        {title: "Pilates", type: "Duration"}
    ]

    
    return (
        <View style={styles.container}>
            <Text style={styles.currentPhase}> Your Current Phase: {currentPhase} </Text>
            <Text style={styles.titles}> Learn more about {phase} here! </Text>
            <FlatList>

            </FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titles: {
      fontWeight: "bold",
      fontSize: "18pt",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    currentPhase: {
        flex: 1,
        fontWeight: "bold",
        fontSize: "22pt",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });

export default PhaseScreen;