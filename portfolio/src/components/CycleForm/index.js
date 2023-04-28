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
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CycleForm;