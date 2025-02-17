import { useNavigate } from "react-router-dom";


export const Login = () => {

  const navigate = useNavigate();
  const onLogin = () =>{
    navigate('/', {
      replace: true
    })  
  }

  return (
    <div className="contenedor">
      <div className="imagen-login">
      <img src='/assets/Logo2.jpg' alt='Logo Pokemon' />
      </div>
       
        <h1>Login</h1>
        <hr/>
        <button
        className="btn login"
        onClick={onLogin}
        >Login</button>
    </div>
   
  )
}
