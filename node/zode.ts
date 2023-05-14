interface Http {}
declare const http: Http;
interface Fs {}
declare const fs: Fs;
interface Path {}
declare const path: Path;

http.createServer(async (req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    res.writeHead(200);
    res.end(data);
  });
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'index.html'));
  } catch (err) {
    console.error(err);
  }
}).listen(8080, () => {
  console.log('서버 시작됨');
});
