import 'dotenv/config';
import server from './server';

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
