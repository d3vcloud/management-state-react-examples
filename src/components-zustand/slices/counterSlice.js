const initialState = {
  counter: 0
};

export const createCounterSlice = set => ({
  ...initialState,
  increment: () => set(state => ({ counter: state.counter + 1 })),
  decrement: () => set(state => ({ counter: state.counter - 1 })),
  reset: () => set(initialState)
});
