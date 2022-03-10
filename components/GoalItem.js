import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GoalItem = props => {
    return (
        <View style={styles.listContainer} >

            <View
                style={styles.listItem}>
                <Text >{props.title}</Text>
                <TouchableOpacity style={styles.delIcon}>
                    <FontAwesome onPress={props.onDelete.bind(this, props.id)} name="remove" size={24} color="red" />
                </TouchableOpacity>
            </View>


        </View>

    );
};


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginTop: 9,
        backgroundColor: '#dfe6e9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',

        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        elevation: 5,



    },
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',



    },
    delIcon: {

    },





});


export default GoalItem;