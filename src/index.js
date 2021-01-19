import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Menu from './menu';
import Content from './content';
import Footer from './footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);
ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('menu')
);
ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  document.getElementById('content')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

