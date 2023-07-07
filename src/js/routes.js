
import HomePage from '../pages/home.f7';
import LoginPage from '../pages/login.f7';
import SignupPage from '../pages/signup.f7';
import WelcomePage from '../pages/welcome.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/signup',
    component: SignupPage,
  },
  {
    path: '/welcome',
    component: WelcomePage,
  }
];

export default routes;