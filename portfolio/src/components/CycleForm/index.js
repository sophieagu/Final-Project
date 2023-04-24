import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

function CycleForm ( {onSubmit} ) {
    const [cycleLength, setCycleLength] = useState("");
    const [periodLength, setPeriodLength] = useState("");
    const [lastPeriod, setLastPeriod] = useState("");

    return (
        <form>
            <Text>My Form</Text>
        </form>
    );
};

export default CycleForm;