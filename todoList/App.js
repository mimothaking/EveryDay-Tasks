import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Todays tasks*/}
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitles}>Today's Tasks</Text>

      <View style={styles.items}>
      {/*This is where tasks will be shown ! */}
        <Task text={'Text one'} />
        <Task text={'Text two'} />
      </View>
      </View>

      {/*Add a task*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'Write your task here pwese'} />
      <TouchableOpacity>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5f9'
  },
  tasksWrapper : {
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
  sectionTitles: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 35
  },
  items: {

  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
});
