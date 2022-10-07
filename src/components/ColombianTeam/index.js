import "./ColombianTeam.scss";
import team from "../../asserts/json/team.json";
import React from "react";
import { ColombianLoading } from "../../shared/ColombianLoading";
import { ColombianProjects } from "../ColombianProjects";
import { ColombianProject } from "../ColombianProject";
import { ColombianModal } from "../../shared/ColombianModal";
import { ColombianProjectDetails } from "../ColombianProjectDetails";
import logoMincultura from "../../asserts/images/logo-mincultura.jpeg";
import logoEntropy from "../../asserts/images/logo-entropy.png";
import logoTfi from "../../asserts/images/logo-tfi.png";
import logoAroundGo from "../../asserts/images/logo-around-go.png";
import logoBiolumen from "../../asserts/images/logo-biolumen.png";

export function ColombianTeam() {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
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
          <ColombianProject project={team.teams.mintic} img={logoMincultura}/>
          <ColombianProject project={team.teams.entropy} img={logoEntropy}/>
          <ColombianProject project={team.teams.aroundGo} img={logoTfi}/>
          <ColombianProject project={team.teams.biolumen} img={logoBiolumen}/>
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
