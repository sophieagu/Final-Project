import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CycleForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [lastPeriodStart, setLastPeriodStart] = useState("");
    const [lastPeriodEnd, setLastPeriodEnd] = useState("");
    const [lastLastPeriodStart, setLastLastPeriodStart] = useState("");
    const [lastLastPeriodEnd, setLastLastPeriodEnd] = useState("");

    const Navigation = useNavigation();

    const handleSave = () => {
        const startLastPeriod = new Date(lastPeriodStart);
        const endLastPeriod = new Date(lastPeriodEnd);
        const lastPeriodLength = Math.floor((endLastPeriod.getTime() - startLastPeriod.getTime()) / (1000 * 3600 * 24));

        const startLastLastPeriod = new Date(lastLastPeriodStart);
        const endLastLastPeriod = new Date(lastLastPeriodEnd);
        const lastLastPeriodLength = Math.floor((endLastLastPeriod.getTime() - startLastLastPeriod.getTime()) / (1000 * 3600 * 24));

        const avgPeriodLength = (lastLastPeriodLength + lastPeriodLength) / 2;
        const avgCycleLength = (lastPeriodStart - lastLastPeriodStart) - 1;
        console.log(avgPeriodLength);
        Navigation.navigate('HomeScreen', {avgPeriodLength, avgCycleLength});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
            style={styles.input}
            keyboardType='ascii-capable'
            value={name}
            onChangeText={(text) => setName(text)}
            />
            <Text style={styles.label}>Age:</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={age}
            onChangeText={(text) => setAge(text)}
            />
            <Text style={styles.label}>Start of last period (MM-DD-YYYY):</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={lastPeriodStart}
            onChangeText={(text) => setLastPeriodStart(text)}
            />
            <Text style={styles.label}>End of Last Period (MM-DD-YYYY):</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={lastPeriodEnd}
            onChangeText={(text) => setLastPeriodEnd(text)}
            />
            <Text style={styles.label}>Start of Period Before Last (MM-DD-YYYY):</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={lastLastPeriodStart}
            onChangeText={(text) => setLastLastPeriodStart(text)}
            />
            <Text style={styles.label}>End of Period Before Last (MM-DD-YYYY):</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={lastLastPeriodEnd}
            onChangeText={(text) => setLastLastPeriodEnd(text)}
            />
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