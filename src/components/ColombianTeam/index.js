import "./ColombianTeam.scss";
import team from "../../asserts/json/team.json";
import React from "react";
import { ColombianLoading } from "../../shared/ColombianLoading";
import { ColombianProjects } from "../ColombianProjects";
import { ColombianProject } from "../ColombianProject";
import { ColombianModal } from "../../shared/ColombianModal";
import { ColombianProjectDetails } from "../ColombianProjectDetails";

export function ColombianTeam() {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="team">
      <h1 className="team__title">{team.information.title}</h1>
      <div className="team__vector"></div>
      {loading ? (
        <div className="team-container__loading">
          <ColombianLoading />
        </div>
      ) : (
        <ColombianProjects setItem={setItem} setOpenModal={setOpenModal}>
          {team.teams
            ? team.teams.map((project, index) => (
                <ColombianProject key={index} project={project} />
              ))
            : "There don'projects"}
        </ColombianProjects>
      )}
      {openModal && (
        <ColombianModal>
          <ColombianProjectDetails item={item} setOpenModal={setOpenModal} />
        </ColombianModal>
      )}
    </div>
  );
}
