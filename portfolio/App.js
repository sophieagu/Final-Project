import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello There! Choose an option below:</Text> <br></br>
      <Button title="Edit Form" Button/> <br></br>
      <Button title="My Calendar" Button/> <br></br> <br></br>
      <Text>Select a Phase:</Text> <br></br>
      <Button title="Menstruation" Button/> <br></br>
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
