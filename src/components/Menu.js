import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import menu from "../data/menu.json";

const Menu = ({ parentCallback }) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    const idChecked = Number(localStorage.getItem("id") || 0);
    setId(idChecked);
  }, []);

  useEffect(() => {
    localStorage.setItem("id", id);
  }, [id]);

  return (
    <nav>
      <ul>
        {menu
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((item, index) => (
            <li key={item.link} className={index === id ? "active" : ""}>
              {item.done === "true" && (
                <Link
                  id={`link-${index}`}
                  onClick={() => {
                    setId(index);
                    parentCallback(item.info);
                  }}
                  to={"/" + item.link}
                >
                  {item.text}
                </Link>
              )}
              {item.done === "false" && (
                <div className="not-clickable">{item.text}</div>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
