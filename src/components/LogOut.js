
const LogOut =()=>{


        function reset(){
            window.location.reload();
        }


    return(
        <button onClick={reset}>LogOut</button>
    )
}