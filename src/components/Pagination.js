import {useState} from "react";


const Pagination = ({resultsPerPage, totalResults, pagination})=>{

    const pageNumber = [];


    for(let i = 1; i<Math.ceil(totalResults / resultsPerPage); i++){


        pageNumber.push(i);

    }

    const [allButtonState, SetAllButtonState] = useState(false)
    const [buttonLegend, SetButtonLegend] = useState('All')
    const allButtonHandler =()=>{

        SetAllButtonState(!allButtonState);

        // Show 30
        if(allButtonState){
            pagination(1);
            SetButtonLegend('All')
        }

        // Show ALL
        else {
            pagination(0);
            SetButtonLegend('pag 1')

        }
    }


    return(
        <nav className={'pagination'}>

                {pageNumber.map((number =>(<button onClick={(e)=> pagination(e.target.value)} value={number}>{number}</button>
                )))}
                <button onClick={()=>allButtonHandler()}>{buttonLegend}</button>

        </nav>
    )
}
export default Pagination