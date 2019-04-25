import React from 'react';
import Layout from '../layout/Layout';
import H1 from '../components/H1';
import Categories from '../components/categories/Categories'

const App = () => {
  return (
    <Layout>
      <H1>Katalog produktów</H1>
      <Categories />
    </Layout>
  );
}

export default App;
