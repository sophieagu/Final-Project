import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CycleForm from './src/components/CycleForm';
import HomeScreen from './components/HomeScreen';
import PhaseScreen from './components/PhaseScreen';
import CalendarScreen from './components/CalendarScreen';

export default function App() {
  const Stack = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CycleForm" component={CycleForm} />
        <Stack.Screen name="PhaseScreen" component={PhaseScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

