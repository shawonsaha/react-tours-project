import React, { useState } from "react";

const Tour = ({ tour, removeTourFromTourjs }) => {
  // console.log(tour);
  // console.log(Object.values(tour));
  const [{ id, name, info, image, price }, setTour] = useState(tour);

  const [isShowingLess, setIsShowingLess] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {isShowingLess ? info.substr(0, 200) + "..." : info.substr(0)}
          <button onClick={() => setIsShowingLess(!isShowingLess)}>
            {isShowingLess ? "show more" : "show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTourFromTourjs(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
