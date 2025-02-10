import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login()
{
    let username = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let loginCheck = () => {
        if (
            username.current.value === "Ratan" &&
            password.current.value === "Ratan@123"
        ) {
             dispatch(Login(username.current.value));
             navigate("/home");
        } else {
            alert("your credentials are wrong.check once!");
        }
    };
    return(
        <>
        <h1>Login Page</h1>
        <label>Username:</label>
        <input type="text" ref={username} />
        <br/>
        <br/>
        <label>Password:</label>
        <input type="Password" ref={password} />
        <br/>
        <br/>
        <button type="submit" onClick={loginCheck}>
            Login
        </button>
        </>
    )
}
export default Login;