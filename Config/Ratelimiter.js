import RateLimiter from './Upstash.js'

export const MainRatelimiter = async (req, res, next) => {
  try {
    const { success } = await RateLimiter.limit('myratelimit')
    if (!success) {
      res.status(429).json('TOO MANY REQUESTS PLEASE TRY AGAIN LATER')
    }
    next()
  } catch (error) {
    console.log('RATE LIMIT ERROR', error)
    next(error)
  }
}
