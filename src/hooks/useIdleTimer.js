import { useEffect, useRef, useState } from "react";

const useIdleTimer = ({ timeout, onIdleWarning, onIdle }) => {
  const timerId = useRef(null);
  const warningTimerId = useRef(null);
  const [isWarningVisible, setWarningVisible] = useState(false);

  // Resetea el timer de inactividad
  const resetTimer = () => {
    if (timerId.current) clearTimeout(timerId.current);
    if (warningTimerId.current) clearTimeout(warningTimerId.current);
    setWarningVisible(false);

    // Mostrar advertencia 1 minuto antes de timeout
    timerId.current = setTimeout(() => {
      setWarningVisible(true);
      if (onIdleWarning) onIdleWarning();

      // Despues de 1 minuto, ejecutar logout
      warningTimerId.current = setTimeout(() => {
        if (onIdle) onIdle();
      }, 60 * 1000);
    }, timeout - 60 * 1000);
  };

  useEffect(() => {
    resetTimer();

    const events = ["mousemove", "keydown", "wheel", "touchstart", "scroll"];

    const handleActivity = () => resetTimer();

    events.forEach((event) => window.addEventListener(event, handleActivity));

    return () => {
      if (timerId.current) clearTimeout(timerId.current);
      if (warningTimerId.current) clearTimeout(warningTimerId.current);
      events.forEach((event) => window.removeEventListener(event, handleActivity));
    };
  }, [timeout, onIdleWarning, onIdle]);

  return { isWarningVisible, resetTimer };
};

export default useIdleTimer;
