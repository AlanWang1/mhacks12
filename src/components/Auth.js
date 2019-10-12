import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from '../../config';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/dashboard',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  

        firebase.initializeApp(config.firebase);

class Auth
 extends React.Component {
    render() {
        return (
            <>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

            </>
            
            );
    }
}

export default Auth
;