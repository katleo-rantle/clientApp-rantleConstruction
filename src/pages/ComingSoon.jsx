import { useState, useEffect } from 'react'
const CommingSoon = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const launchDate = new Date('2026-10-01T00:00:00')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = launchDate - now

      if (diff <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email){
      setSubmitted(true)
      setEmail("");
    }
  }

  return (
    <div className='min-h-screen bg-brand-primary flex-flex-col items-center justify-center px-4 text-center'>
      <div className='max-w-2xl mx-auto pt-6'>
        <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>
          Rantle Construction
        </h1>
        <p className='text-xl md:text-2xl text-brand-warm mb-8'>
          Building the future one project at a time
        </p>

        <div className='flex justify-center gap-4 md:gap-8 mb-12'>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <div
              key={label}
              className='bg-secondary/50 rounded-lg p-4 md:p-6 min-w-[80px]'
            >
              <div className='text-3xl md:text-4xl font-bold text-brand-accent'>
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-300 mb-6">Our website is undercontruction enter your email to be notified when  we launch</p>
        {submitted?(
          <div className="bg-brand-accent border border-brand-accent rounded-lg p-4">
            <p className="text-brand-warm font-semibold">Thank you! we'll notify you when we launch</p>
          </div>
        ):(
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
            className='flex-1 px-4 py-3 rounded-lg bg-brand-secondary/50 border border gray-600 text-white placeholder-gray-400  focus:outline-none focus:border-brand-accent' />
            <button className="px-6 py-3 bg-brand-accent capitalize text-white font-semibold rounded-lg hover:bg-brand-warm transition-colors">
              notify me
            </button>
          </form>
        )}
        <div className="mt-12 text-gray-400 text-sm">
          <p>Phone: 083 717 3812</p>
          <p>Email: info.rantle.co.za</p>
        </div>
      </div>
    </div>
  )
}

export default CommingSoon;
