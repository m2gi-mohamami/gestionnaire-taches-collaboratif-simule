import React from "react";
import { Button, Text, View } from "react-native";
import { useTaskContext } from "../Contexts/TaskContext";

export default function Task({ item }) {
    const { TaskList, setTaskList } = useTaskContext();

    
    function handleDeleteTask() {
        console.log("Deleting task:", item.id);
        console.log("Current TaskList:", TaskList);
        setTaskList(TaskList.filter(task => task.id !== item.id));
    }

    return (
        <View style={{ margin: 10, borderWidth: 2, borderColor: '#ccc', padding: 10, borderRadius: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <View style={{justifyContent:'space-between', flexDirection: 'row'}}>
            <Text>{item.description}</Text>
            <Button title="Delete" color="red" onPress={handleDeleteTask} />
            </View>
        </View>
    );


}