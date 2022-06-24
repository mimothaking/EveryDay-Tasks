import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Todays tasks*/}
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitles}>Today's Tasks</Text>

      <View style={styles.items}>
      {/*This is where tasks will be shown ! */}
        <Task />
        <Task />
        <Task />
        <Task />  
      </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f55',
  },
  tasksWrapper : {
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
  sectionTitles: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {}
});
