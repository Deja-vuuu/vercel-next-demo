// import { format } from 'date-fns'; 
import { useState, useEffect } from 'react';
import { formatTime } from 'utils'
export default function useRealTime() {
  const [realTime, setRealTime] = useState(() => {
    return formatTime(new Date());
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRealTime(formatTime(new Date()));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <span suppressHydrationWarning>{realTime}</span>;
}
