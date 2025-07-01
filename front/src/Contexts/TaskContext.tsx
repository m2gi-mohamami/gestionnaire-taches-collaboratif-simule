import React, { createContext, useContext, useState } from "react";

export const TaskContext = createContext<any>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
    const [TaskList, setTaskList] = useState([
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 2, title: "Task 2", description: "Description for Task 2" },
        { id: 3, title: "Task 3", description: "Description for Task 3" },
    ]);

    return (
        <TaskContext.Provider value={{ TaskList, setTaskList }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() {
    return useContext(TaskContext);
}
