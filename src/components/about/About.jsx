import "./About.css";
import chappan from './chappanlogo.png'

export const About = () => {
  return (
    <div className="abt">
      <h1 style={{ marginLeft: "20px" }}>Who are we ?</h1>
      <div className="aboutbox">
        <div>
          <p style={{ textAlign: "left" }}>
            Chappan Dukan, it tops the priority list of all foodies and is a
            perfect family hangout. As the name suggests, this market has
            fifty-six shops, making it truly Disney's land for food lovers. It
            showcases a wide variety of cuisines ranging from snacks to chats,
            milkshakes, ice cream, juices, sweet meats, all in one place. Other
            attractions here include pony rides, balloon shooting, camel rides,
            small swings. Its easy on-pocket menu and lively ambiance make
            people visit it again and again.
          </p>
        </div>
        <div>
          <img
            src={chappan}
            alt="chappan"
          />
        </div>
      </div>
    </div>
  )
};
