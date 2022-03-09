import { useState, useEffect } from "react";

const ButtonManu = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("show-menu-examples", isOpen);
  }, [isOpen]);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="show-menu"
      type="button"
    >
      show menu
    </button>
  );
};

export default ButtonManu;
