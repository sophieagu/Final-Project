import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CycleForm = () => {
    const [cycleLength, setCycleLength] = useState("");
    const [periodLength, setPeriodLength] = useState("");
    const [lastPeriodStart, setLastPeriodStart] = useState("");

    const Navigation = useNavigation();

    const handleSave = () => {
        Navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Cycle Length:</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={cycleLength}
            onChangeText={(text) => setCycleLength(text)}
            />
            <Text style={styles.label}>Period Length:</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={periodLength}
            onChangeText={(text) => setPeriodLength(text)}
            />
            <Text style={styles.label}>Start of last period:</Text>
            <TextInput>
            style={styles.input}
            keyboardType='numeric'
            value={lastPeriodStart}
            onChangeText={(text) => setLastPeriodStart(text)}
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '80%',
        height: 40,
        padding: 10,
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
      },
      button: {
        backgroundColor: '#3f51b5',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
      },
  });

export default CycleForm;