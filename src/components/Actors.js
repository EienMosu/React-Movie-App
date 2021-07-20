import React from "react";
import { useParams } from "react-router";

import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import ActorsPage from "./ActorsPage";
import Thumb from "./Thumb";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import { useActorFetch } from "../Hooks/useActorFetch";

import NoImage from "../images/no_image.jpg";

const Actors = () => {
    const { actorId } = useParams();
    const {state: actor, loading, error} = useActorFetch(actorId);

    console.log(actor);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong!..</div>;

    return (
        <>
        <BreadCrumb movieTitle={actor.name} />
        <ActorsPage actor={actor} />
        <Grid header={actor.name + " Movies"} >
        {actor.actorCasted.cast.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
        </Grid>
        </>
    )
}


export default Actors;
