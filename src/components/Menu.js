import { NavLink } from "react-router-dom";
import menu from "../data/menu.json";

const resetToggle = () => {
  if (document.querySelector(".show-menu-examples")) {
    document.body.classList.remove("show-menu-examples");
  }
};

const Menu = ({ parentCallback }) => {
  return (
    <nav>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {item.done === "true" && (
              <NavLink
                id={`link-${index}`}
                onClick={() => {
                  resetToggle();
                  parentCallback(item.link, item.text, item.info);
                }}
                to={"/" + item.link}
              >
                {index + 1}. {item.text}
              </NavLink>
            )}
            {item.done === "false" && (
              <div className="not-clickable">
                {index + 1}. {item.text}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
