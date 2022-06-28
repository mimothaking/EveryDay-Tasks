import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import Task from './components/Task';

export default function App() {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
  

      
    const handleAddTask = ()  => {
        
      if (!task == '')
      {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
      }      
      else 
        Alert.alert('Empty field ?', 'Pwease enter something friend !')
      
    }

    const completeTask = (index) => {

        let itemCopy = [...taskItems];
        itemCopy.splice(index, 1);
        setTaskItems(itemCopy);
    }

   const confirm = (index) => {

     Alert.alert(
       "Delete task",
       "Are you sure you want to delete this task ?",
       [
         {
           text: "Bliz no hh",
           onPress: () => console.log("Cancel Pressed")  ,
           style: "cancel"
         },
         { text: "YES", onPress: () => completeTask(index) }
       ]
     );
   
  }

  return (
    <View style={styles.container}>
      {/*Todays tasks*/}
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitles}>Today's Tasks</Text>

      <View style={styles.items}>
      {/*This is where tasks will be shown ! */}
      {
        taskItems.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => confirm(index)}>
          <Task  text={item} />
          </TouchableOpacity>
        )
         
        }) 
      }
      
      </View>
      </View>

      {/*Add a task*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'Write your task here pweaaase...'} value={task} onChangeText={  text => setTask(text) }
         />
      <TouchableOpacity onPress={() => handleAddTask()} >
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
    fontFamily: 'monospace' ,
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 35,
    textAlign: 'center'
  },
  items: {

  },
  writeTaskWrapper:{
    paddingLeft: 15,
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
    marginRight: 15,
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText:{
    fontSize: 18,

  }
});
