import React from 'react';
import { useSetRecoilState } from 'recoil';
import { counterState } from './Main';

const Buttons = () => {
  const setCounterValue = useSetRecoilState(counterState);
  return (
    <div>
      <button onClick={() => setCounterValue(counter => counter + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCounterValue(counter => counter - 1)}>
        Decrementar
      </button>
      <button onClick={() => setCounterValue(0)}>Resetear</button>
    </div>
  );
};

export default Buttons;
