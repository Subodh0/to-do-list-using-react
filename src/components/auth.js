import axios from "axios"
import { useState } from "react"


export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [apiMessage, setAPIMessage] = useState();
    
    const loginUser = () => {
        axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', {
            email: email,
            password: password  
        }).then((res) => {
            localStorage.setItem('token', res.data.token);
            setAPIMessage({
                flag : 0,
                message : "Login Successful !!!"
            })
        }).catch((err) => {
            setAPIMessage({
                flag : 1,
                message : "Please check your credentials !"
            })
        })
    }

    // console.log(email)
    // console.log(password)  
    return (
        <section>
            <div className="container">
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
                                        <span className="input-group-text"><i className="fas fa-user-alt"></i></span>
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
            </div>
        </section>
    )
}