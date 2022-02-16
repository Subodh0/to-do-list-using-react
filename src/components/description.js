import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Description(props) {
    
    const [displayItem, setDispalyItem] = useState([]);
    let { currentItemInView } = useParams();
    //let task = undefined;

    useEffect(() => {
        fetchItem();
    }, [])


    const fetchItem = () => {
        axios.get(`https://api-nodejs-todolist.herokuapp.com/task/${currentItemInView}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then((res)=>{
            setDispalyItem([
                ...displayItem,
                res.data.data.description
            ])
        }).catch((err)=>{
            console.log(err)
        })
    }

    // if (!task)
    //     return <></>
    
    return(
        <section className="w-100 mt-5 mb-5">
            <div className="container">
                <div className ="card">
                    <div className = "card-title mt-4">
                        <h3 className="font-weight-bold">Task Details</h3>
                    </div>
                    <div className="card-body">
                        {/* <h3 className="font-weight-bold">{currentItemInView}</h3> */}
                        <h3 className = "mt-4 font-weight-bold">{displayItem}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}