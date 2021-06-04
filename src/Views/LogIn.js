import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";

import './ViewsCss/login.css'
import redPokeball from '../media/pokeballs/redPokeball.png'
import emptyPokeball from '../media/pokeballs/emtyPokeball.png'

const LogIn = ({onSubmit, askRegister, userDontExist, incorrectPassword}) => {


    const {handleSubmit, register} = useForm();

    let history = useHistory();

useEffect(()=>{
    console.log(userDontExist)
},[userDontExist])


    return (
        <div className={'log-in'}>


            <div className="login-form">
                <div className="title">

                    <h1>Pokedex web</h1>
                    <h1>Welcome</h1>
                </div>
                <div className={"poke-image"}>
                    <div className="center-circle"> </div>
                    <div className="center-line"> </div>
                </div>
                <form onSubmit={handleSubmit((values) => {
                    onSubmit(values);
                    history.push('/pokedex');
                })}>

                    <label htmlFor="input-email">Enter Email :</label>
                    <input type="email" name={'input-email'} {...register('email')} required={'required'}/>

                    <label htmlFor="inputPassword">Password :</label>
                    <input type="password" {...register('password')} required={'required'}/>

                    <button type={'submit'}>Submit</button>
                    <button type={"button"} onClick={askRegister}>Register</button>

                </form>
            </div>

            {userDontExist&&<div className="user-dont-exist">
                <h1>The email entered is not registered</h1>
                <h2>Please sign up</h2>
            </div>}

            {incorrectPassword&&<div className={'incorrect-password'}>
                <h1>Incorrect Password</h1>
            </div>}


        </div>
    )
}
export default LogIn