import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const CycleForm = ( {onSubmit} ) => {
    const [cycleLength, setCycleLength] = useState("");
    const [periodLength, setPeriodLength] = useState("");
    const [lastPeriod, setLastPeriod] = useState("");

    return (
        <Text>My Form</Text>
    );
};

export default CycleForm;