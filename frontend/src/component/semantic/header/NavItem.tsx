import { FC } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Constants } from "../../../utils/Constants";
import { IPage } from "./specification/ILink";

interface IProps {
  id: string;
  title: string;
  expo: string;
  disabled?: boolean;
  items: IPage[];
}

export const NavItem: FC<IProps> = ({ id, title, expo, items, disabled }) => {
  const renderNavList = () => {
    const isDisabled = (page: IPage): boolean => {
      return page.disabled === null || page.disabled === undefined
        ? false
        : page.disabled;
    };

    return items
      .filter((item) => !item.disabled)
      .map((item) => {
        return (
          <NavDropdown.Item
            key={item.name}
            to={item.link}
            disabled={isDisabled(item)}
            className="navDropItem"
            onChange={handleClick}
          >
            <Link to={item.link}>{item.name}</Link>
          </NavDropdown.Item>
        );
      });
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  };

  const makeUrl = (expo: string): string => {
    return expo.toLowerCase().replace(Constants.SPACE, Constants.DASH);
  };

  //later...
  // const getTitleWithIniciale = (title: string): JSX.Element => {
  //   const firstLetter: string = title[0];
  //   const restStr: string = title.slice(1);

  //   return (
  //     <div>
  //       <span className="ini" style={{ fontSize: "30px" }}>
  //         {firstLetter}
  //       </span>
  //       <span>{restStr}</span>
  //     </div>
  //   );
  // };

  const drawItemDivider = (): JSX.Element | null => {
    const activeItemNumber = items.filter((item) => !item.disabled).length;

    return activeItemNumber === 0 ? null : <NavDropdown.Divider />;
  };

  const renderExpoItem = () => (
    <Link className="nav-item" to={expo.toLowerCase()}>
      {expo.toUpperCase()}
    </Link>
  );

  return (
    <NavDropdown
      align="end"
      id={id + "NavItem"}
      title={title.toUpperCase()}
      menuVariant="dark"
      disabled={disabled}
      onChange={handleClick}
    >
      {renderExpoItem()}
      {drawItemDivider()}
      {renderNavList()}
    </NavDropdown>
  );
};
