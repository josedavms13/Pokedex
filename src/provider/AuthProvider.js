


const AuthProvider = {

    signUp : (data)=>{

        const registerUser = {
            user: data.name,
            email : data.email,
            password : data.password
        }


        localStorage.setItem(registerUser.email, JSON.stringify(registerUser));


        return true
    } ,


    login : (data)=>{


        const key = data.email;
        const savedUser = JSON.parse(localStorage.getItem(key));

        if(savedUser){

            if(data.password === savedUser.password){
                return {
                    name : savedUser.user,
                    isAuth : true,
                }
            }else{
                return {isAuth: false}
            }



        }
        else{
            return{
                name : null,
                isAuth: false
            }
        }




    }



}
export default AuthProvider