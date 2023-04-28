import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const CycleForm = ( {onSubmit} ) => {
    const [cycleLength, setCycleLength] = useState("");
    const [periodLength, setPeriodLength] = useState("");
    const [lastPeriodStart, setLastPeriodStart] = useState("");

    return (
        <Text>My Form</Text>
    );
};

export default CycleForm;