import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBell,
  faUser,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button"; /*
@TODO il y a un problème de nom et de logique à ce niveau. A priori, aucune raison de pas garder le <link> initial si il n'y a pas de valeur ajoutée
*/
import Form from "../Form";
import BoxUserSearch from "../navbar/items/BoxUserSearch";

import "../../assets/css/navbar/navbar.css";

/*
  Du coup pour éviter d'avoir deux fois le menu j'ai du tricher et forcer le rerender.
  Le problème avec cette solution c'est que l'animation css à la fermeture n'est pas possible du coup, faudrait faire une animation react.
  mais pour être coherent soit on fait tout en css, soit tout en js. J'ai pas de "bonne" solution tel quel.
*/

export const Navbar = ({ logged = true }) => {
  if (!logged) {
    return <DefaultBar />;
  } else {
    return <ConnectedBar />;
  }
};

const ConnectedBar = () => {
  /*
  @TODO il faut la même logique que la barre deconnecté pour le mobile
  */
  const linkIcon = [
    {
      path: "/articles",
      content: <FontAwesomeIcon icon={faNewspaper} />,
    },
    {
      path: "/myprofile",
      content: <FontAwesomeIcon icon={faUser} />,
    },
    {
      path: "/notifications",
      content: <FontAwesomeIcon icon={faBell} />,
    },
  ];

  return (
    <>
      <Nav className="navbar">
        <Container>
          <NavBrand link="/home" />
          <Nav.Item>
            <div className="wrap-search-content">
              <SearchModule />
            </div>
          </Nav.Item>
          <Nav.Item className="wrap-icons">
            {linkIcon.map(({ path, content }, i) => (
              <Button key={i} path={path} content={content} />
            ))}
          </Nav.Item>
        </Container>
      </Nav>
    </>
  );
};

const DefaultBar = () => {
  const [open, toggle] = useState(false);
  const toggleMenu = () => toggle(!open);

  return (
    <>
      <Nav className="navbar">
        <Container>
          <NavBrand link="/home" />
          <LinksList />
          {!open && (
            <FontAwesomeIcon
              icon={faBars}
              className="btn-bars"
              onClick={toggleMenu}
            />
          )}
        </Container>
      </Nav>
      {open && (
        <div className={"navbar-mobile " + (open ? "" : "slide_to_right")}>
          <LinksList />
          <FontAwesomeIcon
            icon={faTimes}
            className="cross-icon"
            onClick={toggleMenu}
          />
        </div>
      )}
    </>
  );
};

/*
l'idéal serait de déplacer ça dans un autre fichier, vu que ça n'a rien à voir
 */
const SearchModule = () => {
  const [stateSearch, setStateSearch] = useState("box-search-users none");

  const searchHandler = (e) => {
    if (e.target.value.length > 1) {
      setStateSearch("box-search-users");
    } else {
      setStateSearch("box-search-users none");
    }
  };

  return (
    <>
      <Form
        type="text"
        class_name="form-control form-search"
        place="Search,..."
        action={searchHandler}
      />
      <div className={stateSearch}>
        <BoxUserSearch />
        <BoxUserSearch />
        <BoxUserSearch />
        <BoxUserSearch />
        <BoxUserSearch />
      </div>
    </>
  );
};

const LinksList = () => {
  const linkArray = [
    { path: "", content: "What ?" },
    { path: "", content: "Why ?" },
    { path: "", content: "Creator ?" },
  ];

  const linkLogin = [
    { path: "/login", content: "Sign in", className: "sign-in" },
    { path: "/u", content: "Sign up", className: "sign-up" },
  ];
  return (
    <>
      <Nav.Item>
        {linkArray.map(({ path, content }, i) => (
          <Button
            key={i}
            path={path}
            content={content}
            class_name="btn-middle"
          />
        ))}
      </Nav.Item>
      <Nav.Item className="container-btn-sign">
        {linkLogin.map(({ path, content, className }, i) => (
          <Button
            key={i}
            path={path}
            content={content}
            class_name={"btn-sign " + className}
          />
        ))}
      </Nav.Item>
    </>
  );
};

/*@TODO il faudrait retirer le h1 ici parceque dans une page web il y a qu'un seul h1, et pour le seo c'est mieux. */
const NavBrand = ({ link }) => (
  <div className="navbar-brand">
    <a href={link}>
      <h1>SHAREADY</h1>
    </a>
  </div>
);
