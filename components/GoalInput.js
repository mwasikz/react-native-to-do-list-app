import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.modalHero}
                    source={require('../assets/modalHero.jpg')}
                />
                <TextInput
                    placeholder="Enter list"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="#ffb703" title="OK" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button color="#EA2027" title="CANCEL" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 300,
        borderBottomColor: '#023047',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        marginTop: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',


    },
    button: {
        width: '40%',
    },
    modalHero: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    }

});

export default GoalInput;