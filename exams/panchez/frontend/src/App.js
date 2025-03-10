import React from 'react';

function App() {
  React.useEffect(() => {
    window.location.href = '/report.html';
  }, []);

  return null;
}

export default App;
