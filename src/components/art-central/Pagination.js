import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Pagination from '@material-ui/lab/Pagination';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

export default function PaginationComponent({paginate, totalCards, cardsPerPage}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    paginate(value);
  };

  const numPages = Math.ceil(totalCards/cardsPerPage);

  return (
    <div className={classes.root}>
      <Pagination count={numPages} page={page} onChange={handleChange} />
    </div>
  );
}


//Note: onChange is a function prop defined by MUI, you can't normally assume event and value are passed in
//      That's the function signature of onChange

/*Note:
    Wrong: <a href="#!" onClick={paginate(num)}>
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
*/