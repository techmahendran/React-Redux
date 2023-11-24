import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addAmount = (e) => {
    e.preventDefault();

    dispatch(incrementByAmount(Number(incrementAmount) || 0));

    setIncrementAmount(0);
  };

  return (
    <>
      <main className=" text-center">
        <div className="flex justify-center items-center mb-3">
          <div className="flex justify-center rounded-sm items-center border border-gray-200 p-2 w-[200px] text-5xl h-[200px]">
            {count}
          </div>
        </div>
        <button
          className="border border-gray-200 p-2 px-3 mr-2 rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border border-gray-200 p-2 px-3 rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <div className=" mt-5">
          <form onSubmit={addAmount}>
            <input
              className="border border-slate-300 text-[20px] p-2 mr-2 rounded-md"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <button className="border mt-3 rounded-lg border-gray-200 p-2 mr-2">
              Add Amount
            </button>

            <button
              type="reset"
              className="border mt-3 rounded-lg border-gray-200 p-2"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Counter;
