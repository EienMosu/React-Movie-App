import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, chracter, imageUrl, actorId }) => (
  <Wrapper>
    <Link to={"/actor/" + actorId} style={{ textDecoration: "none" }}>
      <Image src={imageUrl} alt="actor-thumb"  />
      <h3>{name}</h3>
      <p>{chracter}</p>
    </Link>
  </Wrapper>
);

export default Actor;
