import { useEffect, useState } from 'react';

type Position = {
  x: number;
  y: number;
}

const initialPosition: Position = { x: 0, y: 0 };

const FollowMouse = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>(initialPosition);
  useEffect(() => {
    const handleMove = (event: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    // cleanup
    return () => {
      window.removeEventListener('pointermove', handleMove);
      setPosition(initialPosition);
    };
  }, [enabled]);
  return (
    <>
      {enabled && <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}></div>}
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Deactivate' : 'Activate'} Track Pointer
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
