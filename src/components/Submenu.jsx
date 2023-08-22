import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    submenu.style.left = `${location.center}px`;
    submenu.style.top = `${location.bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside ref={container} className={`submenu ${isSubmenuOpen && "show"}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, url, icon } = link;
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;