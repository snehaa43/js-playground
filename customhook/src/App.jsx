import useJoke from "./hooks/useJoke";

function App() {

  const {
    joke,
    loading,
    error,
    fetchJoke
  } = useJoke();

  return (
    <div>
      <h1>😂 Joke Generator</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <h2>{joke}</h2>
      )}

      <button onClick={fetchJoke}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;