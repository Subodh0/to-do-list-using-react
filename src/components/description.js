import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./header";
import Loader from "./loader";

export default function Description(props) {

    let { currentItemInView } = useParams();
    const [task, setTask] = useState();

    useEffect(() => {
        fetchItem();
    },[])


    const fetchItem = () => {
        axios.get(`https://api-nodejs-todolist.herokuapp.com/task/${currentItemInView}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then((res)=>{
            setTask(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    // if (!task)
    //     return <></>
    
    return(
        <section className="w-100 mt-5 mb-5">
            <Header />
            <div className="container">
                <div className ="card bby">
                    <div className = "card-title mt-4">
                        <h3 className="font-weight-bold">Task Details</h3>
                    </div>
                    {!task
                        ?
                            <Loader />
                        :
                            <div className="card-body">
                                <h4 className="font-weight-bold">{task._id}</h4>
                                <h3 className = "mt-4 font-weight-bold">{task.description}</h3>
                            </div>
                    }
                </div>
            </div>
        </section>
    )
}