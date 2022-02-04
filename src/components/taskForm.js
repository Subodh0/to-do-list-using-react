import { useState, useEffect } from "react"


export default function TaskForm() {

    const [description, setDescription] = useState('');

    console.log(description)
    
    return(
        <section className = "col-12">
            <div className="row">
                <div class="form-group col-4">
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
                <div className="col-8">
                    <button className = "btn btn-danger float-start">Add to List</button>
                </div>
            </div>
        </section>
    )
}