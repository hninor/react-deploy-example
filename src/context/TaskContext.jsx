import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {


    useEffect(() => {
        setTasks(data)
    }, [])


    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, description) {
        setTasks([...tasks, {
            title: taskTitle,
            description: description,
            id: tasks.length
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))

    }

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask

        }}>
            {props.children}
        </TaskContext.Provider>
    )
}


