import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <>
      <main className=" text-center">
        <div className="flex justify-center items-center mb-3">
          <div className="flex justify-center items-center border border-gray-200 p-2 w-[200px] text-5xl h-[200px]">
            {count}
          </div>
        </div>
        <button
          className="border border-gray-200 p-2 mr-2"
          onClick={() => dispatch(increment())}
        >
          Added
        </button>
        <button
          className="border border-gray-200 p-2"
          onClick={() => dispatch(decrement())}
        >
          Minius
        </button>
        <div className=" mt-5">
          <input
            className="border border-black text-[20px] p-2 mr-2"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className="border border-gray-200 p-2 mr-2"
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            className="border border-gray-200 p-2"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
};

export default Counter;
