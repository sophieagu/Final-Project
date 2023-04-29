import React, {useState} from "react";
import { StyleSheet, Text, Button, View } from "react-native";
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
        <Text>Hello, you made it to the phasescreen</Text>
    )
}

export default PhaseScreen;