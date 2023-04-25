import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import CycleForm from '/components/CycleForm';

export default function App() {
  //const Navigation = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
