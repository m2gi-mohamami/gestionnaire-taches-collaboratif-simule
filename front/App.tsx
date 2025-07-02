/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { TaskProvider } from "./src/Contexts/TaskContext";
import Home from "./src/Screens/Home";

export default function App() {
    return (
        <TaskProvider>
            <Home />
        </TaskProvider>
    );
}
