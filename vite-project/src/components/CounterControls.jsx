import Button from "./Button";

const CounterControls = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <div className="controls">
      <Button label="Decrement" onClick={onDecrement} className="btn decrement" />
      <Button label="Reset" onClick={onReset} className="btn reset" />
      <Button label="Increment" onClick={onIncrement} className="btn increment" />
    </div>
  );
};

export default CounterControls;