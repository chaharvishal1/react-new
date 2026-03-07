import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id: 1, 
            todo: "Todo message", 
            isCompleted: false
        }
    ],
    addTodo : () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {}
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;