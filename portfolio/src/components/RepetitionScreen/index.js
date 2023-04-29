import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const RepetitionExercise = ({route, Navigation}) => {
    const {exercise} = route.params;
    const [reps, setReps] = useState(0);

    const increaseReps = () => {
        const newReps = reps + 1;
        setReps(newReps);
    };

    const resetReps = () => {
        setReps(0);
    };

    const goHome = () => {
        Navigation.navigate('HomeScreen');
    };

    return (
        <View>
            <Text>{exercise.title}</Text>
            <Text>Reps: {reps}</Text>
            <Button title="Increase Rep" onPress={increaseReps}/>
            <Button title="Reset Reps" onPress={resetReps}/>
            <Button title="Go Back" onPress={() => Navigation.navigate('PhaseScreen')}/>
            <Button title="Home" onPress={goHome}/>

        </View>
    );
};

export default RepetitionExercise;