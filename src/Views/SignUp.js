
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";

const SignUp = ({signUpSubmit, call})=>{



    const {handleSubmit, register } = useForm()




    return(

        <div className={'sign-up'}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(signUpSubmit)}>
                <label htmlFor="user-name">Name</label>
                <input type="text" {...register('name')}/>

                <label htmlFor="user-email">Email</label>
                <input type="email" {...register('email')}/>


                <label htmlFor="confirm">Password</label>
                <input type="password" {...register('password')}/>


                    <button type={'submit'} > Submit</button>


            </form>

        </div>
    )
}
export default SignUp