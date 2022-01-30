import React from 'react';
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
  return(
    <>
        <Pricing />
        <InfoSection {...homeObjFour}/>
    </>
  )
};

export default Home;
