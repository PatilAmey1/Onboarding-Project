import './App.css';
import HomePage from './Component/HomePage';
import {Routes,Route} from 'react-router-dom'
import Login from './Component/Login';
import SignIn from './Component/SignIn';
import Number from './Component/Number';
import OTPPage from './Component/OTPPage';
import { CardProvider } from './Context/CardContext';
import ProfileDetails from './Component/ProfileDetails';
import Gender from './Component/Gender';
import YourInterest from './Component/YourInterest';

function App() {
  return (
    <div className="App">
      <CardProvider>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signUp' element={<SignIn/>}></Route>
      <Route path='/logIn' element={<Login/>}></Route>
      <Route path='/NumberPage' element={<Number/>}></Route>
      <Route path='/OtpPage' element={<OTPPage/>}></Route>
      <Route path='/profileDetails' element={<ProfileDetails/>}> </Route>
      <Route path='/GenderDetails' element={<Gender/>}></Route>
      <Route path='/YourInterests' element={<YourInterest/>}></Route>
      </Routes>
      </CardProvider>
    </div>
  );
}

export default App;
