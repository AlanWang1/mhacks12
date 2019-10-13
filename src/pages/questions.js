import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import UserNavbar from '../components/UserNavbar';
import QuestionsSession from '../components/QuestionsSession';

ReactDOM.render(
    <Layout>
        <QuestionsSession/> 
    </Layout>, document.getElementById("root"));