import axios from 'axios';
import React, {useState} from 'react';
function RegistrationForm(props) {
    const [state , setState] = useState({
        fullname:'',
        email: '',
        mobile_no:'',
        password:'',
        confirm_password:'',
    })
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const validateName = ()=>{
        if(state.fullname === ''){
                setNameError('Name Should be Filled')
        }
        else{

        }
    } 

  const emailValidation = ()=>{
      if(!state.email.includes("@" && ".")){
        setemailError('Please Enter Valid Email Id')
      }
      else{

      }
  }
  const phoneNumber = ()=>{
      if(state.mobile_no.length !== 10){
          setError('Mobile Number Should be 10 Digits ')
      }
      else{

      }
  }

    const handleSubmitClick = async (e) => {
        const {  fullname, email, mobile_no, password, confirm_password} = state;
        e.preventDefault();
        validateName()
        phoneNumber()
        emailValidation()
        if(state.password !== state.confirm_password) {
            setMessage('Passwords do not match');
        } else {
            try {
                // setLoading(true)
                const {data} = await axios.post('http://localhost:5000/api/users',{
                    fullname, email, mobile_no, password, confirm_password
                })
                // setLoading(false)
                localStorage.setItem("UserInfo", JSON.stringify(data))
            } catch (error) {
                console.log(error)
            }
        }

        console.log(state)
    }




  return(
     
  <>
  
  <center>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            {/* {} */}
            <form>
            <div className="form-group text-left">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="fullname" 
                        placeholder="Full Name"
                        value={state.fullname}
                        onChange={handleChange} 
                    />
                </div>
                { nameError && <p style={{backgroundColor:'red', color:'white'}}>{nameError}</p>}
                <div className="form-group text-left">
                <label htmlFor="InputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                { emailError && <p style={{backgroundColor:'red', color:'white'}}>{emailError}</p>}
                <div className="form-group text-left">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input type="text" 
                        className="form-control" 
                        id="mobile_no" 
                        placeholder="Mobile Number"
                        value={state.mobile_no}
                        onChange={handleChange} 
                       
                        
                    />
                </div>
                { error && <p style={{backgroundColor:'red', color:'white'}}>{error}</p>}
                
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
                <div className="form-group text-left">
                    <label htmlFor="InputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirm_password" 
                        placeholder="Confirm Password"
                        value={state.confirm_password}
                        onChange={handleChange}
                    />
                </div>
               { message && <p style={{backgroundColor:'red', color:'white'}}>{message}</p>}
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
              
            </form>
        </div>
        </center>
        </>
    )
}

export default RegistrationForm;