
const router = require("express").Router();
import home from '../controllers/HomeController'
import auth from '../controllers/AuthController'
import user from '../controllers/UserController'
import authUser from '../middlewares/authUser'

//render view
router.get("/", authUser, home.index);


//API Route
router.group('/api/v1', (subRouter) => {
  //========= Auth =========
  subRouter.post('/login', auth.login);

  //========= User =========
  subRouter.group('/user', (userRoute) => {
    userRoute.use(authUser);
    userRoute.get('/me', user.me);
  });
});


//Eoror
router.use((req, res, next)=>{
  res.status(404).render('404');
})
module.exports = router