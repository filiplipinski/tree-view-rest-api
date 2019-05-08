import React from 'react';
import Layout from '../layout/Layout';
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';

const App = () => {
  return (
    <Layout>
      <Header>katalog produktów</Header>
      <Categories />
    </Layout>
  );
}

export default App;
