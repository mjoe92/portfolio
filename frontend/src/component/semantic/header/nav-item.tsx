import { FC } from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageLink } from "./specification/link";

interface Props {
  id: string;
  title: string;
  expo: string;
  disabled?: boolean;
  items: PageLink[];
}

export const NavItem: FC<Props> = ({ id, title, expo, items, disabled }) => {
  const activeItems = items.filter((item) => !item.disabled);

  // Simple link (no dropdown children)
  if (activeItems.length === 0) {
    return (
      <Nav.Link
        as={ Link }
        to={ expo }
        id={ id + "NavItem" }
        className="nav-item-link"
        style={{ opacity: disabled ? 0.4 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
      >
        { title.toUpperCase() }
      </Nav.Link>
    );
  }

  const isDisabled = (page: PageLink): boolean =>
    page.disabled === null || page.disabled === undefined ? false : page.disabled;

  const renderNavList = () =>
    activeItems.map((item) => (
      <NavDropdown.Item
        key={ item.name }
        to={ item.link }
        disabled={ isDisabled(item) }
        className="navDropItem"
      >
        <Link to={ item.link }>{ item.name }</Link>
      </NavDropdown.Item>
    ));

  const drawItemDivider = (): JSX.Element | null =>
    activeItems.length === 0 ? null : <NavDropdown.Divider/>;

  const renderExpoItem = () => (
    <Link className="nav-item" to={ expo.toLowerCase() }>
      { expo.toUpperCase() }
    </Link>
  );

  return (
    <NavDropdown
      align="end"
      id={ id + "NavItem" }
      title={ title.toUpperCase() }
      menuVariant="dark"
      disabled={ disabled }
    >
      { renderExpoItem() }
      { drawItemDivider() }
      { renderNavList() }
    </NavDropdown>
  );
};
