import { habilidades } from "../../data/data";
import Skill from "./skill/Skill";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillscontainer">
      <h3> Mis habilidades</h3>
      <section className="skillssection">
        {habilidades.map(habilidad =>
        <Skill key={habilidad.id} img={habilidad.img} alt={habilidad.alt} />
           )}
      </section>
    </div>
  );
};

export default Skills;
