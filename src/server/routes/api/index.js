import authRouter from "./auth";
import userRouter from "./user";
import { Router } from 'express';

const apiRouter = Router();

apiRouter.use(authRouter);
apiRouter.use('/user',userRouter)

apiRouter.use((req, res, next)=>{
  console.log(err);
  
  res.status(404).send({
    message: 'Not found',
    code: 404,
  });
  return next();
})

apiRouter.use((err, req, res, next)=>{
  res.status(500).send({
    message: 'Internal Server Error',
    code: 500,
  });
  return next();
});

module.exports = apiRouter;
