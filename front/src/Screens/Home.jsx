import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useTaskContext } from "../Contexts/TaskContext";
import Task from "./Task";
export default function Home() {
    const { TaskList, setTaskList } = useTaskContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");
    const statusOptions = ['To Do', 'In Progress', 'Done'];
    const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]); 
    const [afterDate, setAfterDate] = useState("");
    function handleAddTask() {
        const newTask = {
            title: newTaskTitle,
            description: newTaskDescription,
            status:'To Do',
            
        };
       
        setModalVisible(false); // Fermer le modal après l'ajout
        setNewTaskTitle(""); // Réinitialiser les champs
        setNewTaskDescription("");
        PostTasks(newTask); // Appeler la fonction pour poster la nouvelle tâche
        
    }
    const getTasks=async()=>{
             await axios.get('http://10.0.2.2:3000/api/tasks')
                .then(response => {
                    setTaskList(response.data);
                
                 })
                .catch(error => {console.log(error)})
        }
       useEffect(()=>{
        getTasks();
       }, [TaskList]);
     const PostTasks=async(newTask)=>{
        // Assuming you have an API endpoint to post tasks
             console.log('Posting new task:', newTask);
             try {
             await axios.post('http://10.0.2.2:3000/api/tasks',newTask)
             console.log('Task added successfully');
             getTasks(); 
             } 
            catch(error) {
                    console.log(error);
            };
        }
      const filterTasks=async()=>{
            const afterDate = document.getElementById("afterDate").value;
            const dateISO = afterDate ? `${afterDate}T00:00:00.000Z` : "";
             await axios.get(`http://10.0.2.2:3000/api/tasks?after=${dateISO}`)
                .then(response => {
                    setTaskList(response.data);
                
                 })
                .catch(error => {console.log(error)})
        }
    return (
        <View style={{ flex: 1, padding: 20 }}>
             <TextInput
                style={styles.input}
                placeholder="Filtrer après (ex: 2024-07-01)"
                value={afterDate}
                onChangeText={setAfterDate}
            /><Button title="Filter Tasks" onPress={filterTasks}></Button>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Task list:</Text>
            <FlatList
                data={TaskList}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Task item={item} />
                )}
            />
            <Button title="Add Task" onPress={() => setModalVisible(true)} />

           
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add New Task</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Task Title"
                            value={newTaskTitle}
                            onChangeText={setNewTaskTitle}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Task Description"
                            value={newTaskDescription}
                            onChangeText={setNewTaskDescription}
                        />
                        
                        <Button title="Add" onPress={handleAddTask} />
                        <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});