import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import useNavigation from "@react-navigation/native"; 

const CycleForm = ( {onSubmit} ) => {
    const [cycleLength, setCycleLength] = useState("");
    const [periodLength, setPeriodLength] = useState("");
    const [lastPeriodStart, setLastPeriodStart] = useState("");

    const Navigation = useNavigation();

    const handleSave = () => {

    }
    
    return (
        <Text>My Form</Text>
    );
};

export default CycleForm;