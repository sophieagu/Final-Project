import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import CycleForm from '/components/CycleForm';

export default function App() {
  //const Navigation = useNavigation();
  return (
    <View style = {styles.container}>
        <Text>Welcome Back! Choose an option below:</Text> <br></br>
        <Button title="Edit Form" Button/> <br></br>
        <Button title="My Calendar"  Button/> <br></br> <br></br>
        <Text>Select a Phase:</Text> <br></br>
        <Button title="Menstruation"  Button/> <br></br>
        <Button title="Follicular Phase" Button/> <br></br>
        <Button title="Ovulation" Button/> <br></br>
        <Button title="Luteal Phase" Button/> <br></br>
        <StatusBar style="auto" />
      </View>
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
