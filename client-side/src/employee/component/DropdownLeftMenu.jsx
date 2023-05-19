import { NavDropdown } from "react-bootstrap";

import "./../style/drop.css";
function DropdownLeftMenu({ transaction }) {


  return (
    <div>
      <NavDropdown
        title={`${transaction.title}`}
        id="dropdown-menu"
        align="start"
        drop="start"
      >
        <NavDropdown.Item className="text-end" href={`${transaction.path1}`}>
          المعاملات المقبولة
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="text-end" href={`${transaction.path2}`}>
          المعاملات المرفوضة
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="text-end" href={`${transaction.path3}`}>
          المعاملات غير المنجزة
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="text-end"  href={`${transaction.path4}`}>
          المعاملات المنجزة
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default DropdownLeftMenu;
