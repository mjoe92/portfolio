import { FC } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Constants } from "../../../utils/Constants";
import { IPage } from "./specification/ILink";

interface IProps {
  id: string;
  key: string;
  title: string;
  expo: string;
  disabled?: boolean;
  items: IPage[];
}

export const LeftNavItem: FC<IProps> = ({
  id,
  key,
  title,
  expo,
  items,
  disabled,
}) => {
  const renderNavList = () => {
    return items
      .filter((item) => !item.disabled)
      .map((item) => {
        const link: string = makeUrl(item.link);
        return (
          <NavDropdown.Item
            key={item.name}
            to={link}
            disabled={isDisabled(item)}
            className="navDropItem"
            onChange={handleClick}
          >
            <Link to={link}>{item.name}</Link>
          </NavDropdown.Item>
        );
      });
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  };

  const isDisabled = (page: IPage): boolean => {
    return page.disabled === null || page.disabled === undefined
      ? false
      : page.disabled;
  };

  const makeUrl = (expo: string): string => {
    return expo.toLowerCase().replace(Constants.SPACE, Constants.DASH);
  };

  //later...
  const getTitleWithIniciale = (title: string): JSX.Element => {
    const firstLetter: string = title[0];
    const restStr: string = title.slice(1);

    return (
      <div>
        <span className="ini" style={{ fontSize: "30px" }}>
          {firstLetter}
        </span>
        <span>{restStr}</span>
      </div>
    );
  };

  const drawItemDivider = (): JSX.Element | null => {
    const activeItemNumber = items.filter((item) => !item.disabled).length;

    return activeItemNumber === 0 ? null : <NavDropdown.Divider />;
  };

  const renderExpoItem = () => (
    <NavDropdown.Item key={expo}>
      <Link to={makeUrl(expo)}>{expo}</Link>
    </NavDropdown.Item>
  );

  return (
    <NavDropdown
      align="end"
      id={id + "NavItem"}
      key={key}
      title={title}
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
