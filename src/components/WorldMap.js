import React from "react";
import WorldSVG from "./WorldSVG";

const WorldMap = props => {
  return (
    <WorldSVG
      width={1000}
      triggerPlace={props.triggerPlace}
      visitedPlaces={props.visitedPlaces}
    />
  );
};
export default WorldMap;
