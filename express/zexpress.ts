interface ZExpress {}
interface CookieParser {}
interface Session {}
interface Flash {}
interface Passport {}
interface RequestHandler {}
interface ErrorRequestHandler {}
declare const express: ZExpress;
declare const cookieParser: CookieParser;
declare const flash: Flash;
declare const session: Session;
declare const passport: Passport;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static('./public'));
app.use(cookieParser('SECRET'));
app.use(session({
  secret: 'SECRET',
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// 미들웨어는 RequestHandler 타입이다.
const middleware: RequestHandler = (req, res, next) => {
  req.params.paramType;
  req.body.bodyType;
  req.query.queryType;
  res.locals.hello = 'world';
  req.session.sessionData;
  req.user?.zerocho;

  req.flash('플래시메시지');
  req.flash('1회성', '플래시메시지');
  req.flash();

  res.json({
    message: 'hello',
  });
};
app.get('/',(req, res, next) => {
  res.locals.hello;
  next('route');
}, middleware);

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.status);
};
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('8080 포트에서 서버 실행 중');
});
