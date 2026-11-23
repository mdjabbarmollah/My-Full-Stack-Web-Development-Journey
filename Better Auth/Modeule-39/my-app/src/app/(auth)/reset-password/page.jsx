import React, { Suspense } from 'react';
import Resetpasswordform from './resetpasswordform ';

const ResetPasswordPage = () => {

  return (

    <div>
      <h2>Reset password</h2>
      <Suspense fallback='loading'>
        <Resetpasswordform>
          
        </Resetpasswordform>

      </Suspense>
    </div>
      
  );

};

export default ResetPasswordPage;