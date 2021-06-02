import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";


const LogIn = ({onSubmit, askRegister})=>{


    const {handleSubmit, register} = useForm();

    let history = useHistory();




    return(
        <div className={'log-in'}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="input-email">Enter Email :</label>
                <input type="email" name={'input-email'} {...register('email')} required={'required'}/>

                <label htmlFor="inputPassword">Password :</label>
                <input type="password" {...register('password')} required={'required'}/>

                <Link to={'/pokedex'} > <button type={'submit'}>Log in</button></Link>
                <button type={"button"} onClick={askRegister}>Register</button>

            </form>




        </div>
    )
}
export default LogIn