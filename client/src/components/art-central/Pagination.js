import React from "react";

export default function PaginationComponent({ currentPage, setPage, totalCards, cardsPerPage }) {
    const numPages = Math.ceil(totalCards / cardsPerPage);
    const pages = [];
    for (let i = 1; i <= numPages; i++) pages.push(i);

    const handleClick = (e, value) => {
        setPage(value);
    };

    return (
        <div className="Pagination">
            <ul>
                <li>&laquo;</li>
                {pages.map(num => (
                    <li key={num} className={currentPage === num && "active"}>
                        <a href="#!" onClick={e => handleClick(e, num)}>
                            {num}
                        </a>
                    </li>
                ))}
                <li>&raquo;</li>
            </ul>
        </div>
    );
}

//Note: onChange is a function prop defined by MUI, you can't normally assume event and value are passed in
//      That's the function signature of onChange

/*Note: Wrong: <a href="#!" onClick={paginate(num)}>
    paginate(num) is called every time the component render: this is like doing this onClick={function()}
    Correct: <a href="#!" onClick={() => paginate(num)}>
    *Do this when you want to pass in a function with a parameter

    
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalCards/cardsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <h1>Pagination!</h1>
            <ul>
                {
                pageNumbers.map( (num) =>
                    <li><a href="#!" onClick={() => paginate(num)}>{num}</a></li>
                )}
            </ul>
        </div>
    )


                  import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))
const classes = useStyles();
    <Pagination count={numPages} page={page} onChange={handleChange} />
*/
