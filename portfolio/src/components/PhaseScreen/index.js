import React, {useState} from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PhaseScreen = ( {route} ) => {
    const { phase, avgPeriodLength, avgCycleLength } = route.params;
    const [currentPhase, setCurrentPhase] = useState(phase);

    return (
        <Text>Hello, you made it to the phasescreen</Text>
    )
}

export default PhaseScreen;