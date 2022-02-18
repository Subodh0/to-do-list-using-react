import { useState } from "react"


export default function TaskForm(props) {

    const { addToList, displayTasks } = props;

    const [description, setDescription] = useState('');

    
    return(
        <section className = "col-12">
            <div className="row">
                <div className="form-group col-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter task description" 
                        value = {description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }} 
                        
                    />
                </div>
                <div className="col-4">
                    <button 
                        className = "btn btn-danger float-start"
                        disabled = {description.length === 0}
                        onClick = {() => {
                            addToList(description)
                            setDescription("");
                        }}
                    >
                        Add to List
                    </button>
                </div>
                {/* <div className="col-4">
                    <button className="btn btn-info float-end"
                        onClick={
                            displayTasks()
                        }
                    >
                        All Tasks
                    </button>
                </div> */}
            </div>
        </section>
    )
}