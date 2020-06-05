import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <button
        type="button"
        className="ui button primary"
        onClick={() => setResource('posts')}
      >
        Posts
      </button>
      <button
        type="button"
        className="ui button primary"
        onClick={() => setResource('todos')}
      >
        Todo
      </button>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
