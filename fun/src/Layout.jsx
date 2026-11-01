import React from 'react';
import SubmitBtn from './useFormStatus/SubmitBtn';
import Loading from './useTransition/Loading';
import Memo from './performance/Memo';
import HookUseMemo from './performance/HookUseMemo';
import HookUseCallback from './performance/HookUseCallback';
import StateLift from './statelifting/StateLift';

const Layout = ({ props, children }) => {
 const handleSubmit = async (event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log('Form submitted');
  };
  return (
    <>
        <h1>Layout Component</h1>
        {/* <form action={handleSubmit}>
            <SubmitBtn />
        </form> */}

        {/* <Loading>
          {children}
        </Loading> */}

        {/* <Memo /> */}

        {/* <HookUseMemo /> */}

        {/* <HookUseCallback /> */}

        <StateLift />
    </>
  );
};

export default Layout;