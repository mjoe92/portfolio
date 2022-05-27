import { FC } from "react";
import { NavDropdown } from "react-bootstrap";
import { IPage } from "./specification/ILink";

interface IProps {
  id: string;
  title: string;
  expo: string;
  disabled?: boolean;
  items: IPage[];
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
      const ref: string = makeUrl(item.ref);
      return (
        <NavDropdown.Item
          key={item.name}
          href={ref}
          disabled={isDisabled(item)}
          className="navDropItem"
          onChange={handleClick}>
          {item.name}
        </NavDropdown.Item>
      );
    });
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  }

  const isDisabled = (page: IPage): boolean => {
    return page.disabled == null || page.disabled == undefined
      ? false
      : page.disabled;
  };

  const makeUrl = (expo: string): string => {
    return expo.toLowerCase().replace(" ", "-");
  };

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

  return (
    <NavDropdown
      align="end"
      id={id + "NavItem"}
      title={title}
      menuVariant="dark"
      disabled={disabled}
      onChange={handleClick}>
      <NavDropdown.Item key={expo} href={makeUrl(expo)}>
        {expo}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      {renderNavList()}
    </NavDropdown>
  );
};
