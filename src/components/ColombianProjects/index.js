import React from "react";
import "./ColombianProjects.scss";

export function ColombianProjects({ children, team, setItem, setOpenModal }) {
  return (
    <div className="team-cards">
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { team, setItem, setOpenModal })
      )}
    </div>
  );
}
