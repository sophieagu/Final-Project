import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CycleForm from './src/components/CycleForm';
import HomeScreen from './src/components/HomeScreen';
import PhaseScreen from './src/components/PhaseScreen';
import CalendarScreen from './src/components/CalendarScreen';

function App() {
  const Stack = createNativeStackNavigator();
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
export default App;

