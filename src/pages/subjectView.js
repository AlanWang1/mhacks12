import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import SubjectView from '../components/SubjectView';
import UserNavbar from '../components/UserNavbar';
ReactDOM.render(
    <Layout>
        <UserNavbar/>
        <SubjectView>
    

        </SubjectView>
        
    </Layout>, document.getElementById('root'));