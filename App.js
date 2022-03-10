import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { AntDesign } from '@expo/vector-icons';




export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    {
      id: Math.random().toString(),
      value: goalTitle
    }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.heroImg}
          source={require('./assets/todo.jpg')}

        />
      </View>

      <View style={styles.addButtonContainer}>

        <TouchableOpacity style={styles.addButton} color="#ffb703" onPress={() => setIsAddMode(true)} >
          <View>
            <AntDesign name="plus" size={30} color="black" />
          </View>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>


      </View>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (

          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}

          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  addButtonContainer: {

  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#ffb703',
    height: 90,
    width: 90,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
    padding: 10,
    marginLeft: 110,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    elevation: 5,

  },
  buttonText: {
    fontWeight: '600',
  },
  heroImg: {
    height: 200,
    width: 200,

  },
  imgContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 50,
    marginTop: 50,
  },


});
