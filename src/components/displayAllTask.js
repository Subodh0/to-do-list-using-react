import axios from "axios";
import { useEffect, useState } from "react";
import TaskForm from "./taskForm";
export default function DisplayAllTask() {

    const [allTask, setAllTask] = useState();

    useEffect(()=>{
        displayTasks();
    },[])

    const displayTasks = () =>{
        axios.get('https://api-nodejs-todolist.herokuapp.com/task?completed=false',{
            headers : {
                Authorization : localStorage.getItem('token') 
            }
        }).then((res)=>{
            setAllTask(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <section className="w-100 mt-5 mb-5">
            <div className="container">
                <div className ="card">
                    <div className = "card-title mt-4">
                        <h3 className="font-weight-bold">All Task Details</h3>
                    </div>
                    <div className="card-body">
                        <div className = "row mb-3">
                            <span>{allTask}</span>
                            <TaskForm 
                                displayTasks = {displayTasks}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}