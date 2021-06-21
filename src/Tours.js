import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTourFromAppjs }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          tour={tour}
          removeTourFromTourjs={removeTourFromAppjs}></Tour>
      ))}
    </div>
  );
};

export default Tours;
