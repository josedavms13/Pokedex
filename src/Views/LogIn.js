import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";

const LogIn = ({onSubmit, askRegister})=>{


    const {handleSubmit, register} = useForm();





    return(
        <div className={'log-in'}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="input-email">Enter Email :</label>
                <input type="email" name={'input-email'} {...register('userEmail')} required={'required'}/>

                <label htmlFor="inputPassword">Password :</label>
                <input type="password" {...register('userPassword')} required={'required'}/>

                <button type={'submit'}>Log in</button>
                <button type={"button"} onClick={askRegister}>Register</button>

            </form>




        </div>
    )
}
export default LogIn