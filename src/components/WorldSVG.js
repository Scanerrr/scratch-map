import React from "react";
import countries from "../countries";

const WorldSVG = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 1001"
      strokeLinejoin="round"
      stroke="#000"
      fill="none"
    >
      {countries.map(({ code, name, path }) => (
        <path
          key={code}
          id={code}
          onClick={() => props.triggerPlace(code)}
          data-id={code}
          data-name={name}
          d={path}
          fill="#f2f2f2"
          fillRule="evenodd"
          className={props.visitedPlaces.includes(code) ? "visited" : ""}
        />
      ))}
    </svg>
  );
};

export default WorldSVG;
