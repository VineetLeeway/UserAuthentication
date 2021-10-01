import React,{useState} from 'react'
import axios from 'axios'

function LoginUser() {
    const [state , setState] = useState({
       
        email: '',
        password:'',
      
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

const handleSubmitClick = async (e) => {
        const {email, password} = state;
        e.preventDefault();
 

            try {
                const config = {
                    headers:{
                        "Content-type":"application/json"
                    }
                }
   
                const {data} = await axios.post('http://localhost:5000/api/users/login',{
                    email, password
                }, config)
                console.log(data)
                localStorage.setItem("UserInfo", JSON.stringify(data))
            } catch (error) {
                console.log(error)
            }
            console.log(email, password)
        }

       
    
return (
        <>
  
        <center>
              <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                  <form>
                      <div className="form-group text-left">
                      <label htmlFor="InputEmail1">Email address</label>
                      <input type="email" 
                             className="form-control" 
                             id="email" 
                          
                             placeholder="Enter email"
                             value={state.email}
                             onChange={handleChange}
                      />
                      </div>
                      <div className="form-group text-left">
                          <label htmlFor="InputPassword1">Password</label>
                          <input type="password" 
                              className="form-control" 
                              id="password" 
                              placeholder="Password"
                              value={state.password}
                              onChange={handleChange} 
                          />
                      </div>
                   
                      <button 
                          type="submit" 
                          className="btn btn-primary"
                          onClick={handleSubmitClick}
                      >
                          Login
                      </button>
                  </form>
              </div>
              </center>
              </>
)
}

export default LoginUser
