import 'dotenv/config';
import server from './lib/server';

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
