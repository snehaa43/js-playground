import { useState, useEffect } from "react";

function useJoke() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchJoke() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data = await response.json();

      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return {
    joke,
    loading,
    error,
    fetchJoke
  };
}

export default useJoke;