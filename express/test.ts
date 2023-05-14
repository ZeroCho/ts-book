import cookieParser from 'cookie-parser';
import express, { RequestHandler, ErrorRequestHandler } from 'express';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';

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
  res.locals.localType;
  res.json({
    message: 'hello',
  });

  req.flash('플래시메시지');
  req.flash('1회성', '플래시메시지');
  req.flash();

  req.session;
  req.user?.zerocho;
};
app.get('/', middleware);

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.status);
};
app.use(errorMiddleware);

app.listen(8080, () => {
    console.log('8080 포트에서 서버 실행 중');
});
