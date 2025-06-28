/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { TaskProvider } from "./Contexts/TaskContext";
import Home from "./Screens/Home";

export default function App() {
    return (
        <TaskProvider>
            <Home />
        </TaskProvider>
    );
}
