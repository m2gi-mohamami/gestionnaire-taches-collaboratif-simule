import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from "react";
import { Text } from 'react-native';
export const TaskContext = createContext<any>(null);
export function TaskProvider({ children }: { children: React.ReactNode }) {
    const [TaskList, setTaskList] = useState([]);
    //load tasks from bd
    const getTasks=async()=>{
         await axios.get('http://10.0.2.2:3000/api/tasks')
            .then(response => {
                setTaskList(response.data);
            
             })
            .catch(error => {console.log(error)})
    }
   useEffect(()=>{
    getTasks();
   }, []);
    return (
    
        <TaskContext.Provider value={{ TaskList, setTaskList }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}
