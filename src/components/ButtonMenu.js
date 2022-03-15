const setIsOpen = () => {
  if (document.querySelector(".show-menu-examples")) {
    document.body.classList.remove("show-menu-examples");
  } else {
    document.body.classList.add("show-menu-examples");
  }
};

const ButtonMenu = ({ isOpenCallback }) => {
  return (
    <button
      onClick={() => {
        setIsOpen();
      }}
      className="show-menu"
      type="button"
    >
      show menu
    </button>
  );
};

export default ButtonMenu;
