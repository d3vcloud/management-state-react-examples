import React, { Suspense } from 'react';
import {RecoilRoot} from 'recoil'
import Main from "./components-recoil/PokeApp/Main";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </RecoilRoot>
  );
}

export default App
