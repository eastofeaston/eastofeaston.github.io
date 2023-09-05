import React from "react";
import { Container } from "reactstrap";
import { ReactComponent as Brandmark } from "../icons/brandmark.svg";
import { ReactComponent as Buffer } from "../icons/buffer.svg";


export default function Header(props) {
  return (
    <React.Fragment>
      <HeaderContents/>
    </React.Fragment>
  );
}

function HeaderContents(props) {
  return (
    <div className="full-width header vertical-center">
      <Container>
        <div className="header-container">
          <Brandmark className={"header-logo"} />
          <h1
            className="tco-text-upper header-title"
            data-testid="header-title"
          >
            Rye Easton
          </h1>
          <Buffer className={"header-logo"} />
        </div>
      </Container>
    </div>
  );
}
