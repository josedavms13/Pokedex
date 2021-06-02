


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

        const key = data.userEmail;
        console.log(key);
        console.log(localStorage.getItem(key));
        const user = JSON.parse(localStorage.getItem(data.userEmail));

        if(user){
            if(data.userPassword === user.password){
                console.log('logged in')
            }
            else{
                console.log('Wrong Password')
            }



        }
        else{
            console.log(`This user doesn't exist`)
        }

        console.log(data);
        console.log(user);

        // if(data.password === user.password){
        //     console.log('correct Password')
        // }else{
        //     console.log('incorrect password')
        // }
        // console.log('login');
        // console.log(data);



    }



}
export default AuthProvider