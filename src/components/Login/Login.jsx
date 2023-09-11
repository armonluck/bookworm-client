import { useRef, useState } from 'react';
import axios from 'axios';
import './Login.scss';

// UUID Generator
const { v4: uuidv4 } = require('uuid');

function Login() {
    const formRef = useRef()
    const [message, setMessage] = useState("")

    function onSubmit(event) {
        event.preventDefault()

        for (let i = 0; i < 3; i++) {
            if (formRef.current[i].value === "") {
                formRef.current[i].classList.add("error")
                setMessage(`Required Field: ${formRef.current[i].name}`)
                throw new Error(`400 (Required Field: ${formRef.current[i].name})`)
            }
            formRef.current[i].classList.remove("error")
        }

        axios.post(`/`, {
            id: uuidv4(),
            contact_username: formRef.current['contact username'].value,
            contact_email: formRef.current['contact email'].value,
            contact_password: formRef.current['contact password'].value

        }).then((res) => {
            console.log(res)
            event.target.reset()
        }).catch((err) => {
            console.log(err)
        })

    }
    const handleOnInvalid = ((element) => {
        element.setCustomValidity(message);
    });

    return (
        <div className='login'>
            <div className='login-header'>
                <h1 className='login-header__title'>Login</h1>
                <p className='login-header__text'>
                    Make an account and begin your reading adventure.
                </p>
            </div>

            <form className="login-form" ref={formRef} onSubmit={onSubmit}>
                <section className="login-form__fields">
                    <h3>User Name</h3>
                    <input className='login-form__input' type="text" placeholder="User Name" name="user name" required onInvalid={(e) => handleOnInvalid(e.target)}></input>
                    <h3>Email</h3>
                    <input className='login-form__input' type="text" placeholder="Email" name="user email" required onInvalid={(e) => handleOnInvalid(e.target)}></input>
                    <h3>Password</h3>
                    <input className='login-form__input' type='password' placeholder="Password" name="user password" required onInvalid={(e) => handleOnInvalid(e.target)}></input>
                </section>
                <section className="login-form__btn-box">
                    <button className="login-form__btns">
                        Cancel
                    </button>
                    <button className="login-form__btns" type="submit">
                        Sign Up
                    </button>
                </section>
            </form>
        </div>
    )
}

export default Login;