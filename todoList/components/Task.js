import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task =(props) => {
    return (
        <View style={styles.item}>
        <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}>

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 4
    },
    itemText:{
        paddingLeft: 15,
        maxWidth: '80%'
    },
    circular:{
        width: 11,
        height: 11,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#55BCF6'
    }
});


export default Task;
