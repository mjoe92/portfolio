import { FC } from "react";
import { NavDropdown } from "react-bootstrap";
import IPageItem from "./IPageItem";

interface IProps {
  id: string;
  title: string;
  expo: string;
  disabled?: boolean;
  items: IPageItem[];
}

export const LeftNavItem: FC<IProps> = ({
  id,
  title,
  expo,
  items,
  disabled,
}) => {
  const renderNavList = () => {
    return items.map((item) => {
      const ref: string = "#" + item.ref;
      return (
        <NavDropdown.Item key={item.name} href={ref} className="navDropItem">
          {item.name}
        </NavDropdown.Item>
      );
    });
  };

  return (
    <NavDropdown
      id={id + "NavItem"}
      title={title}
      menuVariant="dark"
      disabled={disabled}>
      <NavDropdown.Item key={expo} href={expo}>
        {expo}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      {renderNavList()}
    </NavDropdown>
  );
};
