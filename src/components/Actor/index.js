import React from "react";

import { Wrapper, Image } from "./Actor.styles";

const Actor = ({name, chracter, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt="actor-thumb" />
        <h3>{name}</h3>
        <p>{chracter}</p>
    </Wrapper>
)

export default Actor;