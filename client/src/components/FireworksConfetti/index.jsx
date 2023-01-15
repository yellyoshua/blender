import { useEffect } from 'react';
import { useConfetti } from '@/shared/hooks/useConfetti';

export default function FireworksConfetti ({delay = 0, duration = 3000}) {
  const {canvasConfettiRef, confetti, resetConfetti} = useConfetti({
    resize: true
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      confetti.fireworks(duration);
    }, delay);

    return () => {
      clearTimeout(timeout);
      resetConfetti();
    };
  }, [delay, duration]);

  return (
    <canvas
      ref={canvasConfettiRef}
      className="fixed top-0 bottom-0 pointer-events-none h-screen w-full z-50"
    />
  );
}
