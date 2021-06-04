import './ComponentsCss/logout.css'


const LogOut =()=>{


        function reset(){
            window.location.reload();
        }


    return(
        <button className={'logout-button'} onClick={reset}>LogOut</button>
    )
}
export default LogOut