import { atom, selector, useRecoilValue } from 'recoil'
import Buttons from './Buttons';

export const counterState = atom({
  key: 'counterKey',
  default: 0
})

export const selectorDoubleCounterState = selector({
  key: 'selectorCounterKey',
  get: ({get}) => {
    const atomValue = get(counterState);
    return `El resultado es: ${atomValue} * 2 = ${atomValue * 2}`;
  }
});

const Main = () => {
  const counterValue = useRecoilValue(counterState);
  const counterDoubleValue = useRecoilValue(selectorDoubleCounterState);
  return (
    <>
      <h1>Counter con Recoil</h1>
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold'
        }}
      >
        Counter State:{counterValue}
      </div>
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold'
        }}
      >
        {counterDoubleValue}
      </div>
      <Buttons />
    </>
  );
}

export default Main