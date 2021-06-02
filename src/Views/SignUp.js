
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";

const SignUp = ({signUpSubmit, call})=>{



    const {handleSubmit, register } = useForm()

    const [checkPassword, SetCheckPassword] = useState('')


    return(

        <div className={'sign-up'}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(signUpSubmit, (err) => console.log(err))}>
                <label htmlFor="user-name">Name</label>
                <input type="text" {...register('name')}/>

                <label htmlFor="user-email">Email</label>
                <input type="email" {...register('email')}/>

                <input type="password" onChange={(e)=>SetCheckPassword(e.target.value)}/>

                <label htmlFor="confirm">Password</label>
                <input type="password" {...register('password' , {validate: value => value === checkPassword || 'Password dont match'})}/>


                <button type={'submit'} > Submit</button>


            </form>

        </div>
    )
}
export default SignUp