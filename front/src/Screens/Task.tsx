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
            <Text style={{ fontWeight: 'bold'  ,fontSize:19}}>{item.title}</Text>
            <View style={{justifyContent:'space-between', flexDirection: 'row'}}>
            
            <Text style={{color:"green",fontWeight: 'bold' ,fontSize:15}}>{item.status}</Text>
            <Button title="Delete" color="red" onPress={handleDeleteTask} />
            </View>

            <Text style={{ fontWeight: 'bold' }}>
  {new Date(item.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long' })}
</Text>
        </View>
    );


}