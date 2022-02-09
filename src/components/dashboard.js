import { useState, useEffect } from 'react';
import { uncheckedList } from './data';
import Description from './description';
import List from './list'
import TaskForm from './taskForm';

export default function Dashboard() {
    const [pendingTasks, setPendingTasks] = useState();
    const [completedTasks, setCompletedTasks] = useState([]);
    const [currentItemView, setCurrentItemView] = useState(undefined);

    useEffect(() => {
        setPendingTasks(uncheckedList);
    }, [])


    //console.log(setDisplayTasks);

    const viewTask = (key, data) => {
        setCurrentItemView({
            key : key,
            data : data
        })
    }
    //console.log(displayDescription);

    const addToList = (key, description) => {
        setPendingTasks({
            ...pendingTasks,
            [key] : {
                description : description,
                timestamp : new Date()
            }
        })
    }
   
    const markAsChecked = (key, data) => {
        setCompletedTasks({
            ...completedTasks,
            [key] : data
        })
        delete pendingTasks[key];
    }

    const markAsUnchecked = (key, data) => {
        delete completedTasks[key];

        setPendingTasks({
            ...pendingTasks,
            [key] : data
        })
    }
    
    return (
        <section className='container mt-5'>
            <div className = "row mb-3">
                <TaskForm 
                    pendingTasks = {pendingTasks}
                    addToList = {addToList}
                />
            </div>
            <div className = "row">
                <div className = "col-6">
                    <List 
                        list = {pendingTasks}
                        fireListEvent = {markAsChecked}
                        buttonText = "Check"
                        title = "Tasks to be done !!"
                        viewTask ={viewTask}
                        currentItemView = {currentItemView}
                    />
                </div>
                <div className = "col-6">
                    <List
                        list = {completedTasks}
                        fireListEvent = {markAsUnchecked}     
                        buttonText = "Un-Check"
                        title = "Completed Tasks"
                        viewTask ={viewTask}
                        currentItemView = {currentItemView}
                    /> 
                </div>
            </div>
            {
                currentItemView &&
                <div className='row'>
                    <Description 
                        task = {currentItemView}
                    />
                </div>
            }
        </section>
    );
}