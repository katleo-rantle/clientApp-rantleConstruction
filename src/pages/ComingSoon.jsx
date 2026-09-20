import { useState, useEffect } from 'react'

const CommingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const launchDate =  new Date('2026-10-01T00:00:00');
  const [timeleft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
     

  useEffect( () => {
    const timer = setInterval( ()=>{
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0){
        clearInterval(timer);
        return;
      }
    
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 *60 *24)),
        hours: Math.floor((diff / (1000 * 60 *60 )) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000 ) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  },[])

  return null;
}