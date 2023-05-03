import cookieSession from 'cookie-session';

const sessionMiddleware = cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_SECRET || ""],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
});

export default sessionMiddleware;