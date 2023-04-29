import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';

const DurationExercise = ({ route, Navigation }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [activityCount, setActivityCount] = useState(0);

  const { exercise } = route.params;

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const resetTimer = () => {
    setTimeElapsed(0);
    setIsActive(false);
    setActivityCount(0);
    console.log(activityCount);
  }

  const goHome = () => {
    Navigation.navigate('HomeScreen');
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeElapsed(timeElapsed => timeElapsed + 1);
      }, 1000);
    } else if (!isActive && timeElapsed !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeElapsed]);

  return (
    <View>
      <Text>{exercise.title}</Text>
      <Text>Timer: {timeElapsed}</Text>
      <Button onPress={handleToggle}>
        <Text>{isActive ? 'Pause' : 'Start'}</Text>
      </Button>
      <Button title="Reset Timer" onPress={resetTimer}/>
      <Button title="Go Back" onPress={() => Navigation.navigate('PhaseScreen')}/>
      <Button title="Home" onPress={goHome}/>
    </View>
  );
};


export default DurationExercise;
