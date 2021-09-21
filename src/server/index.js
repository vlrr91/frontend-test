import express from 'express';
import cors from 'cors';
import pino from 'pino';
import routes from './routes';

// Configuration
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const PORT = process.env.PORT || 3000;
const app = express();
// Middleware
app.use(cors());
app.use(express.static('dist'));
// Routes
app.use('/', routes);

app.listen(PORT, () => {
  logger.info(`Server application running on port ${PORT}`);
});
