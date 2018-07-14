import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from 'components/Global/Header';
import Content from 'components/Global/Content';
import Footer from 'components/Global/Footer';

import items from './data/menu';

import './App.scssm';

const title = 'react-simple-boilerplate';

class App extends PureComponent {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        
          <title>{title}</title>
        </Helmet>
        <Header
          items={items}
        />
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
