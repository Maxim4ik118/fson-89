import React, { useMemo, useState } from 'react';

const AppWithMemoExample = () => {
  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');
  const [counter, setCounter] = useState(0);

  // O(n^2)
  // ['Earth', 'Mars', 'Jupiter', 'Venus'] | "e" -> ['Earth', 'Jupiter', 'Venus']

  const filteredPlanets = useMemo(
    () =>
      planets.filter(planet => {
        return planet.toLowerCase().includes(query.toLowerCase());
      }),
    [planets, query]
  );

  return (
    <div>
      <button onClick={() => setCounter(prev => prev + 1)}>
        Increment Counter: {counter}
      </button>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {filteredPlanets.map(planet => (
        <div key={planet}>{planet}</div>
      ))}
    </div>
  );
};

export default AppWithMemoExample;
