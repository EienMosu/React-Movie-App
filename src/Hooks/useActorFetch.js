import { useState, useEffect } from "react";
import API from "../API";

export const useActorFetch = (actorId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setLoading(true);
        setError(false);

        const actor = await API.fetchActor(actorId);
        const actorCasted = await API.fetchActorCasted(actorId);

        setState({
          ...actor,
          actorCasted: actorCasted,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchActor();
  }, [actorId]);

  return {state, error, loading};
};
