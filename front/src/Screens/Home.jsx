import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useTaskContext } from "../Contexts/TaskContext";
import Task from "./Task";

export default function Home() {
    const { TaskList, setTaskList } = useTaskContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");
    
   
    function handleAddTask() {
        const newTask = {
            id: TaskList.length + 1,
            title: newTaskTitle,
            description: newTaskDescription,


        };
        setTaskList([...TaskList, newTask]);
        setModalVisible(false); // Fermer le modal après l'ajout
        setNewTaskTitle(""); // Réinitialiser les champs
        setNewTaskDescription("");
        
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
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