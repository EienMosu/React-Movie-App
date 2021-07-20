import React from "react";
//Components
import Thumb from "../Thumb";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Image
import NoImage from "../../images/no_image.jpg";
//Styles
import { Wrapper, Content, Text } from "./ActorsPage.styles";

const ActorsPage = ({ actor }) => (
  <Wrapper backdrop={actor.backdrop_path}>
    <Content>
      <Thumb
        image={
            actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{actor.title}</h1>
        <h3>Biography</h3>
        <p>{actor.biography}</p>
        <div className="rating-directors">
          <div>
            <h3>Birthday</h3>
            <p>{actor.birthday}</p>
          </div>
          <div className="director">
            <h3>Place Of Birth</h3>
              <p>{actor.place_of_birth}</p>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default ActorsPage;
