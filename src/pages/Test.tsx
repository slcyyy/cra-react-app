import { observer } from "mobx-react";
import useStore from "store";

const Test = () => {
  const { counter } = useStore();

  return (
    <div>
      <h1>count mobx</h1>
      <h2>count : {counter.count}</h2>
      <h2>double:{counter.double}</h2>
      <button onClick={() => counter.decrement()}>-1</button>
      <button onClick={() => counter.increment()}>+1</button>
      <button onClick={() => counter.asyncIncrease()}>异步+10</button>
      <div></div>
    </div>
  );
};

export default observer(Test);
