import { useEffect, useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState<boolean>(false);
  useEffect(() => {
    console.log('effect', { enabled });
  }, [enabled]);
  return (
    <>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Deactivate' : 'Activate'} Track Pointer
      </button>
    </>
  );
}

export default App;
