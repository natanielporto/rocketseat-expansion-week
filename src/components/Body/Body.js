import React from 'react';
import { Ouch } from './styles';
import question from '../../assets/ouch1.png';
import answer from '../../assets/ouch2.png';

const Body = () => {
  return (
    <div>
      <Ouch>
        <img src={question} alt='Question?' />
      </Ouch>
      <Ouch>
        <img src={answer} alt='Answer!' />
      </Ouch>
    </div>
  );
};

export default Body;
