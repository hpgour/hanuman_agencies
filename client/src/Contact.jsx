import React, { useReducer } from 'react';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Contact = () => {
    const history = useNavigate();
    const [data, setData] = useState({
        name: '',
        phone: '',
        mail: '',
        message: '',
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.name}.My mobile number is ${data.phone}.E-mail is ${data.mail}`)
    }

    const PostData=async(e)=>{
        e.preventDefault();
        const{name,phone,mail,message}=data;

       const res=await fetch('/register',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            
            name,phone,mail,message

        })
       });
       const resp =await res.json();
       if(resp.status===422 || !resp) {
            window.alert("Please fill all the data");
            console.log("registration failed");
       }

        else{
        window.alert("successful registration");
        console.log("registration succesful");

        // history("/");
       }
    }
    
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form method="POST" >
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter your name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={data.name} onChange={InputEvent} placeholder='Enter your name' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter your mobile number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.phone} onChange={InputEvent} placeholder='Enter your mobile number' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="mail" value={data.mail} onChange={InputEvent} placeholder='Enter your e-mail' />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Message</label>
                                <textarea type="password" class="form-control" id="exampleInputPassword1" name="message" value={data.message} onChange={InputEvent} placeholder='Leave any message'></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary" onClick={PostData}>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact;