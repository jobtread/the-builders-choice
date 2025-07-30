import { createServer } from 'node:http';

import { watch } from 'watchy';

createServer((_, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Transfer-Encoding': 'chunked'
  });
  res.on(
    'close',
    watch({ patterns: ['docs/**'], onChange: () => res.write('data:\n\n') })
  );
}).listen(81);
