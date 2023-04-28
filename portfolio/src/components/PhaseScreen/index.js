import React, {useState} from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PhaseScreen = () => {
    const [currentPhase, setCurrentPhase] = useState("");

    return (
        <Text>Hello, you made it to the phasescreen</Text>
    )
}

export default PhaseScreen;