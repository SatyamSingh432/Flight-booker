import { useState } from "react";
import "./App.css";

function App() {
  const [oneWay, setOneWay] = useState(null);
  const [returnFlight, setReturnFlight] = useState(null);
  const [depDate, setDepDate] = useState("");

  const oneWayHandler = () => {
    setOneWay("oneWay");
    setReturnFlight(null);
  };

  const returnFlightHandler = () => {
    setReturnFlight("return");
    setOneWay(null);
  };
  const date = new Date().toISOString().split("T")[0];
  const dateChangeHandler = (e) => {
    setDepDate(e.target.value);
  };
  console.log(date);
  const depSubmitHandler = (e) => {
    e.preventDefault();
    alert(`You have booked a one-way flight on ${depDate} `);
    setDepDate("");
  };
  return (
    <div className="m-5">
      <nav className=" flex justify-center text-3xl pt-4">
        <h1>Flight Booker</h1>
      </nav>
      <div className="flex flex-col gap-6 pt-4 px-4">
        <p>choose your flight type:</p>
        <div
          className="flex
         gap-4"
        >
          <button
            className={`border rounded-sm cursor-pointer px-2 py-1 ${
              oneWay === "oneWay" ? "bg-black text-white" : ""
            }`}
            onClick={oneWayHandler}
          >
            One Way Flight
          </button>
          <button
            className="border rounded-sm cursor-pointer px-2 py-1"
            onClick={returnFlightHandler}
          >
            {" "}
            Return Flight
          </button>
        </div>
      </div>
      <div className="py-4 px-4">
        {oneWay === "oneWay" && (
          <form
            onSubmit={depSubmitHandler}
            className="flex flex-col w-[20%] gap-4"
          >
            <label htmlFor=""> Departure Date : </label>
            <input
              type="date"
              value={depDate}
              min={date}
              className="border rounded-sm px-4 py-1"
              onChange={dateChangeHandler}
            />
            <button type="submit" className="px-2 border rounded-sm py-1">
              Submit
            </button>
          </form>
        )}
        {returnFlight === "return" && <div>return</div>}
      </div>
    </div>
  );
}

export default App;
