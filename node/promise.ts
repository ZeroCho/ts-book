import fs from 'fs/promises';
import http from 'http';
import path from 'path';

http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'index.html'));
    res.writeHead(200);
    res.end(data);
  } catch (err) {
    console.error(err);
  }
}).listen(8080, () => {
  console.log('서버 시작됨');
});