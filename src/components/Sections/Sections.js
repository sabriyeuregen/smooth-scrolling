import "./Sections.css";
const Sections = (props) => {
  return (
    <div>
      <div ref={props.home} className="home">
        <h3>home</h3>
      </div>
      <div ref={props.about} className="about">
        <h3>about</h3>
      </div>
      <div ref={props.contact} className="contact">
        <h3>Contact</h3>
      </div>
    </div>
  )
}

export default Sections