


const AuthProvider = {

    signUp : (data)=>{

        console.log('registered');
        console.log(data);
        const registerUser = {
            user: data.name,
            email : data.email,
            password : data.password
        }

        console.log(registerUser);

        localStorage.setItem(registerUser.email, JSON.stringify(registerUser));


        return true
    } ,


    login : (data)=>{
        console.log('login');
        console.log(data);


        const key = data.email;
        console.log(key);
        console.log(localStorage.getItem(key));
        const savedUser = JSON.parse(localStorage.getItem(data.email));

        if(savedUser){
            if(data.password === savedUser.password){
                console.log('logged in')
            }
            else{
                console.log('Wrong Password')
            }

            console.log(data);
            console.log(savedUser);

            if(data.password === savedUser.password){
                console.log('correct Password')
                return {
                    name : savedUser.user,
                    isAuth : true,
                }
            }else{
                return {isAuth: false}
            }



        }
        else{
            console.log(`This user doesn't exist`)
        }




    }



}
export default AuthProvider