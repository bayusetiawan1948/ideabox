import { App } from './app/Server';
import dotenv from 'dotenv';
dotenv.config();
const PORT: number = 5000;
const DOMAIN: string = process.env.domain || '127.0.0.1';

App.listen(PORT, DOMAIN, async () => {
  console.info(`Server Ready at ${DOMAIN}:${PORT} to serve, Happy Working`);
});
