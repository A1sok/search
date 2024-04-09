import React, { useState } from 'react'

const SideBar = () => {
    const [active, setActive] = useState(false);
  return (
    <div className={active ? "sidebar active" : "sidebar"}>
      <button onClick={() => setActive(!active)}>
        <i class="bx bx-menu bx-flip-horizontal"></i>
      </button>
      <div className={"sidebar_menu"}>
        <a href="##">
          <i class="bx bxs-home bx-flashing bx-flip-horizontal"></i>
        </a>
        <a href="##">About</a>
        <a href="##">
          <i class="bx bxs-user-rectangle bx-flip-horizontal bx-flashing"></i>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
