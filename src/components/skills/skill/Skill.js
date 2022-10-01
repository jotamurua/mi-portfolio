import "./Skill.css"

const Skill = ({ img, alt}) => {
  return (
<article>
<button className="botonneo">
  <img src={img} alt={alt}/>
</button>

</article>


  )
}

export default Skill