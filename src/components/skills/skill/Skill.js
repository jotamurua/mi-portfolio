import "./Skill.css"

const Skill = ({img, alt}) => {
  return (
  <article className="skill__article">
    <button className="skill__button">
      <img src={img} alt={alt}/>
    </button>
  </article>
  )
}

export default Skill