import axios from "axios";
import { Navigate } from "react-router-dom";
import { Component } from "react";


export default class RegisterUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : "",
            password : "",
            userName : "",
            disableButton : false
        }
    }

    registerUser = async () => {
        this.setState({
            disableButton : true
        })

        await axios.post('https://api-nodejs-todolist.herokuapp.com/user/register',{
            email : this.state.email,
            password : this.state.password,
            name : this.state.userName,
            age : parseInt(this.state.age)
        }).then((res) => {
            this.setState({
                flag : 0,
                message : "Registration successfull !!"
            })
        }).catch((err) => {
            if(err && err.response && err.response.data)
                this.setState({
                    flag : 1,
                    message : err.response.data,
                    email : "",
                    password : "",
                    userName : "",
                    age : undefined
                })
        })
        this.setState({
            disableButton : false
        })
    }

    render() {
        if(this.state.flag === 0)
            return (<Navigate to="/" />)

        return (
            <section>
                <div class="wrapper">
                    <div class="logo"> <img src="../../../lis.png" alt=""/> </div>
                        <div class="text-center mt-4 name"> To-Do-List </div>
                            <form class="p-1 mt-1">
                                <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span> 
                                    {/* <input type="text" name="userName" id="userName" placeholder="Username"/> */}
                                    <input 
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        value = {this.state.userName}
                                        placeholder="Name" 
                                        onChange = {(e) => {this.setState({userName : e.target.value})}} 
                                    /> 
                                </div>
                                <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span> 
                                    {/* <input type="password" name="password" id="pwd" placeholder="Password"/> */}
                                    <input 
                                        type="text" 
                                        value = {this.state.age}  
                                        placeholder="Age" 
                                        onChange = {(e) => {this.setState({age : e.target.value})}} 
                                    />
                                    {/* <input 
                                    type="text" 
                                    value = {this.state.age} 
                                    className="form-control" 
                                    placeholder="age" 
                                    onChange = {(e) => {this.setState({age : e.target.value})}} 
                                />  */}
                                </div> 
                                <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span> 
                                    {/* <input type="password" name="password" id="pwd" placeholder="Password"/> */}
                                    <input 
                                        type="text"
                                        name="email"
                                        id="email"
                                        value = {this.state.email} 
                                        placeholder="Email" 
                                        onChange = {(e) => {this.setState({email : e.target.value})}} 
                                    /> 
                                </div>
                                <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span> 
                                    {/* <input type="password" name="password" id="pwd" placeholder="Password"/> */}
                                    <input 
                                        type="password"
                                        name="password"
                                        id="pwd"
                                        value = {this.state.password}
                                        placeholder="Password" 
                                        onChange = {(e) => {this.setState({password : e.target.value})}} 
                                    /> 
                                </div>
                                {(this.state.apiMessage) &&
                                    <p className={!this.state.apiMessage.flag ? "text-success" : "text-danger"}>{this.state.apiMessage.message}</p>
                                }  
                                {/* <button class="btn mt-3">Register</button> */}
                                <button 
                                    className="btn mt-3"
                                    onClick={() => {this.registerUser()}}
                                    disabled = {this.state.disableButton}
                                >
                                    Register
                                </button>
                            </form>
                        <div class="text-center fs-6"> <a href="/">Login</a> </div>
                </div>



            {/* <div className="mt-5 row">
                <h1 className="font-weight-bold w-100">My To-Do List Application</h1>
            </div>
            <div className="container mt-5">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Register</h3>
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
                                    value = {this.state.userName} 
                                    className="form-control" 
                                    placeholder="name" 
                                    onChange = {(e) => {this.setState({userName : e.target.value})}} 
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input 
                                    type="text" 
                                    value = {this.state.age} 
                                    className="form-control" 
                                    placeholder="age" 
                                    onChange = {(e) => {this.setState({age : e.target.value})}} 
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input 
                                    type="text" 
                                    value = {this.state.email} 
                                    className="form-control" 
                                    placeholder="email" 
                                    onChange = {(e) => {this.setState({email : e.target.value})}} 
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                    type="password" 
                                    value = {this.state.password} 
                                    className="form-control" 
                                    placeholder="password" 
                                    onChange = {(e) => {this.setState({password : e.target.value})}}
                                />
                            </div>
                            {(this.state.apiMessage) &&
                                <p className={!this.state.apiMessage.flag ? "text-success" : "text-danger"}>{this.state.apiMessage.message}</p>
                            }
                            <div className="form-group">
                                <button 
                                    className="btn btn-primary float-right login_btn"
                                    onClick={() => {this.registerUser()}}
                                    disabled = {this.state.disableButton}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="/">Log In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
        );
    }

}

// export function RegisterUser () {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [age, setAge] = useState();
//     const [userName, setUserName] = useState("");
//     const [apiMessage, setAPIMessage] = useState();

//     const registerUser = () =>{
//         axios.post('https://api-nodejs-todolist.herokuapp.com/user/register',{
//             email : email,
//             password : password,
//             name : userName,
//             age : parseInt(age)
//         }).then((res)=>{
//             setAPIMessage({
//                 flag: 0,
//                 message : "Registration successful !!!"
//             })
//         }).catch((error)=>{
//             if(error && error.response && error.response.data)
//                 setAPIMessage({
//                     flag:1,
//                     message:error.response.data
//                 })
//         })
//     }

//     return (
//         <section>
//             <div className="mt-5 row">
//                 <h1 className="font-weight-bold w-100">My To-Do List Application</h1>
//             </div>
//             <div className="container mt-5">
//                 <div className="d-flex justify-content-center h-100">
//                     <div className="card">
//                         <div className="card-header">
//                             <h3>Register</h3>
//                             <div className="d-flex justify-content-end social_icon">
//                                 <span><i className="fab fa-facebook-square"></i></span>
//                                 <span><i className="fab fa-google-plus-square"></i></span>
//                                 <span><i className="fab fa-twitter-square"></i></span>
//                             </div>
//                         </div>
//                         <div className="card-body">
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-user"></i></span>
//                                 </div>
//                                 <input 
//                                     type="text" 
//                                     value = {userName} 
//                                     className="form-control" 
//                                     placeholder="name" 
//                                     onChange = {(e) => {setUserName(e.target.value)}} 
//                                 />
//                             </div>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-user"></i></span>
//                                 </div>
//                                 <input 
//                                     type="text" 
//                                     value = {age} 
//                                     className="form-control" 
//                                     placeholder="age" 
//                                     onChange = {(e) => {setAge(e.target.value)}} 
//                                 />
//                             </div>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-user"></i></span>
//                                 </div>
//                                 <input 
//                                     type="text" 
//                                     value = {email} 
//                                     className="form-control" 
//                                     placeholder="email" 
//                                     onChange = {(e) => {setEmail(e.target.value)}} 
//                                 />
//                             </div>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-key"></i></span>
//                                 </div>
//                                 <input 
//                                     type="password" 
//                                     value = {password} 
//                                     className="form-control" 
//                                     placeholder="password" 
//                                     onChange = {(e) => {setPassword(e.target.value)}}
//                                 />
//                             </div>
//                             {(apiMessage) &&
//                                 <p className={!apiMessage.flag ? "text-success" : "text-danger"}>{apiMessage.message}</p>
//                             }
//                             <div className="form-group">
//                                 <button 
//                                     className="btn btn-primary float-right login_btn"
//                                     onClick={() => {registerUser()}}
//                                 >
//                                     Register
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="card-footer">
//                             <div className="d-flex justify-content-center links">
//                                 Don't have an account?<a href="/">Log In</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>    
//     )
// }