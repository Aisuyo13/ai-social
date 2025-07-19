import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { requestAuth } from './redux/reducer/auth-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from './components/header/HeaderContainer';
import Profile from './components/profile/ProfileContainer';
import Messenger from './components/messenger/MessengerContainer';
import Friends from './components/friends/Friends'
import Media from './components/media/Media'
import Users from './components/users/UsersContainer';
import Footer from './components/footer/Footer';
import Login from './components/login/LoginContainer';
import Preloader from './components/common/Preloader';
import { GlobalStateType } from './redux/redux-store';

type AppPropsType = {
  isInitialized: boolean;
  requestAuth: () => void;
};

const App = ({ isInitialized, requestAuth }: AppPropsType) => {

  React.useEffect(() => {
    requestAuth();
  }, [requestAuth]);

  if (!isInitialized) return <Preloader />;

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/profile/:userId?' element={<Profile />} />
          <Route path='/messenger' element={<Messenger />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/media' element={<Media />} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
  
};

const mapStateToProps = (state: GlobalStateType) => {
  return {
    isInitialized: state.app.isInitialized,
  }
}

export default compose(
  connect(mapStateToProps, { requestAuth })
)(App);
