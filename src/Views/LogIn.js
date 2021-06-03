import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";

import './ViewsCss/login.css'
import redPokeball from '../media/pokeballs/redPokeball.png'
import emptyPokeball from '../media/pokeballs/emtyPokeball.png'

const LogIn = ({onSubmit, askRegister}) => {


    const {handleSubmit, register} = useForm();

    let history = useHistory();


    const [pokeImage, SetPokeImage] = useState('../media/pokeballs/redPokeball.png');

    return (
        <div className={'log-in'}>


            <div className="login-form">
                <h1>Welcome To Pokedex</h1>
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



        </div>
    )
}
export default LogIn