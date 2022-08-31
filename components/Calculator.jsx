import React, { useState } from "react";

const activities = [
  {
    id: "0",
    title: "Sedentary (little or no exercise)",
    value: 1.2,
  },
  {
    id: "1",
    title: "Lightly active (exercise 1–3 days/week)",
    value: 1.375,
  },
  {
    id: "2",
    title: "Moderately active (exercise 3–5 days/week)",
    value: 1.55,
  },
  {
    id: "3",
    title: "Active (exercise 6–7 days/week)",
    value: 1.725,
  },
  {
    id: "4",
    title: "Very active (hard exercise 6–7 days/week)",
    value: 1.9,
  },
];

const Calculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activityValue, setActivityValue] = useState(0);
  const [formula, setFormula] = useState("0");
  const [calories, setCalories] = useState(0);

  console.log(calories);

  const handleCalculation = (e) => {
    e.preventDefault();

    if (formula === "0") {
      if (gender === "male") {
        const score = 10 * weight + 6.25 * height + 5 * age + 5;
        const amr = score * activityValue;
        setCalories(amr);
      } else {
        const score = 10 * weight + 6.25 * height + 5 * age + 161;
        const amr = score * activityValue;
        setCalories(amr);
      }
    } else {
      if (gender === "male") {
        const score = 13.397 * weight + 4.799 * height + 5.677 * age + 88.362;
        const amr = score * activityValue;
        setCalories(amr);
      } else {
        const score = 9.247 * weight + 3.098 * height + 4.33 * age + 447.593;
        const amr = score * activityValue;
        setCalories(amr);
      }
    }
  };

  return (
    <div className="grid px-14 py-10 justify-center lg:w-screen align-middle">
      <div className="h-fit w-full lg:max-w-full px-5 grid text-center justify-center item-center text-[#1B1B1B] rounded-[32px] bg-tertiary">
        <h1 className="text-xl lg:text-3xl font-bold my-5">
          Calorie Calculator
        </h1>
        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          <button
            className="min-h-[40px] rounded-xl px-2 text-lg text-neutral"
            style={{
              backgroundColor: gender === "male" ? "#F3745A" : "#7f7f7f",
            }}
            onClick={() => setGender("male")}
          >
            Male
          </button>
          <button
            className="min-h-[40px] rounded-xl px-2 text-lg text-neutral"
            style={{
              backgroundColor: gender === "female" ? "#F3745A" : "#7f7f7f",
            }}
            onClick={() => setGender("female")}
          >
            Female
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 lg:gap-6 my-6">
          <input
            type="number"
            placeholder="Age"
            className="outline-none rounded-lg h-14 p-3 border-[1px] border-[#D3D3D3] text-base"
            min={0}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Weight (Kg)"
            className="outline-none rounded-lg h-14 p-3 border-[1px] border-[#D3D3D3] text-base"
            min={0}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Height (cm)"
            className="outline-none rounded-lg h-14 p-3 border-[1px] border-[#D3D3D3] text-base"
            min={0}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="grid lg:grid-cols-1 gap-3 lg:gap-6">
          <select
            className="outline-none rounded-lg h-14 px-3 border-[1px] border-[#D3D3D3] text-base"
            min={0}
            value={activityValue}
            onChange={(e) => setActivityValue(e.target.value)}
            required
          >
            {activities.map((activity) => (
              <option key={activity.id} value={activity.value}>
                {activity.title}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-6 my-6">
          <button
            className="min-h-[40px] rounded-xl px-2 text-lg text-neutral"
            style={{ backgroundColor: formula === "0" ? "#F3745A" : "#7f7f7f" }}
            onClick={() => setFormula("0")}
          >
            Mifflin
          </button>
          <button
            className="min-h-[40px] rounded-xl px-2 text-lg text-neutral"
            style={{ backgroundColor: formula === "1" ? "#F3745A" : "#7f7f7f" }}
            onClick={() => setFormula("1")}
          >
            Harris
          </button>
        </div>
        <div className="flex justify-center my-10">
          <button
            className="min-h-[40px] min-w-[180px] rounded-xl px-2 text-lg bg-primary hover:bg-secondary text-neutral"
            onClick={handleCalculation}
          >
            See result
          </button>
        </div>
        <div className="flex justify-center mb-10 text-center rounded-2xl bg-neutral p-4">
          <p className="font-semibold text-2xl">
            Your result: {calories && Math.round(calories)} calories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
