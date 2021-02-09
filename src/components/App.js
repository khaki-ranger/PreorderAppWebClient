import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './ui/Header';
import Shop from './shop';

import Data from '../data/shop';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '10px',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.root}>
        {Data.map(shop => (
          <Shop 
            key={shop.id}
            name={shop.name}
            image={shop.image}
            description={shop.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
