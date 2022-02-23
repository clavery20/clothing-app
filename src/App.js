import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Register from './components/Register/register.component';
import Checkout from './pages/checkout/checkout.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview} from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => 
          // Redirect to this
          this.props.currentUser ? (
              <Redirect to ='/' />
          // if not do this
            ) : (
              <Register />
            )
          }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ( {
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps, mapDispatchToProps)(App);
