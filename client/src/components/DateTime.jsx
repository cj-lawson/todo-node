/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const DateTime = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1 * 60 * 60 * 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });
  //   console.log(date);

  return (
    <div className="flex justify-center">
      <p>
        {new Intl.DateTimeFormat("en-us", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }).format(date)}
      </p>
    </div>
  );
};

export default DateTime;
