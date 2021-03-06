import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react"



export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [apiMessage, setAPIMessage] = useState();
    const [disableButton, setDisableButton] = useState(false);

    let history = useNavigate();
    
    const loginUser = async () => {
        setDisableButton(true);
        await axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', {
            email: email,
            password: password  
        }).then((res) => {
            localStorage.setItem('userId',res.data.user._id);
            localStorage.setItem('token', res.data.token);
            setAPIMessage({
                flag : 0,
                message : "Login Successful !!!"
            })
            history("/home");
        }).catch((err) => {
            setAPIMessage({
                flag : 1,
                message : "Please check your credentials !"
            })
        })
        setDisableButton(false);
    }
    
    return (
        
        <section>
            <div className="wrapper">
                <div className="logo"> <img src="../../../lis.png" alt=""/> </div>
                <div className="text-center mt-4 name"> To-Do-List </div>
                    <form className="p-3 mt-3">
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> 
                            {/* <input type="text" name="userName" id="userName" placeholder="Username"/> </div> */}
                            <input 
                                name="userName"
                                id="userName"
                                type="text" 
                                value = {email} 
                                //className="form-control" 
                                placeholder="Username" 
                                onChange = {(e) => {setEmail(e.target.value)}} 
                            />
                        </div>
                        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> 
                        {/* <input type="password" name="password" id="pwd" placeholder="Password"/>  */}
                                <input 
                                    name="password" 
                                    id="pwd" 
                                    placeholder="Password"
                                    type="password" 
                                    value = {password} 
                                    //className="form-control" 
                                    onChange = {(e) => {setPassword(e.target.value)}}
                                />
                        </div>
                        {(apiMessage) &&
                            <p className={apiMessage.flag ? "text-danger" : "text-success"}>{apiMessage.message}</p>
                        } 
                        {/* <button className="btn mt-3">Login</button> */}
                        <button 
                                className="btn mt-3"
                                onClick={() => {loginUser()}}
                                disabled = {disableButton}
                            >
                                Login
                            </button>
                    </form>
                <div className="text-center fs-6"> <a href="#">Forget password?</a> or <a href="/register">Sign up</a> 
            </div>
            </div>



        {/* <div className="mt-5 row">
            <h1 className="font-weight-bold w-100">My To-Do List Application</h1>
        </div>
        <div className="container mt-5">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square"></i></span>
                            <span><i className="fab fa-google-plus-square"></i></span>
                            <span><i className="fab fa-twitter-square"></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input 
                                type="text" 
                                value = {email} 
                                className="form-control" 
                                placeholder="email" 
                                onChange = {(e) => {setEmail(e.target.value)}} 
                            />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input 
                                type="password" 
                                value = {password} 
                                className="form-control" 
                                placeholder="password" 
                                onChange = {(e) => {setPassword(e.target.value)}}
                            />
                        </div>
                        {(apiMessage) &&
                            <p className={apiMessage.flag ? "text-danger" : "text-success"}>{apiMessage.message}</p>
                        }
                        <div className="form-group">
                            <button 
                                className="btn btn-primary float-right login_btn"
                                onClick={() => {loginUser()}}
                                disabled = {disableButton}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<a href="/register">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
                </div>
                </div> */}
    </section>
    )
}