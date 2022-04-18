import React from 'react';

const Blogs = () => {
    return (
        <div className='blog row row-cols-1 row-cols-lg-2 p-5'>
            <div className='col'>
                <div className='card' style={{ marginBottom: '20px' }}>
                    <div className='card-body'>
                        <h2>Defference between authorization and authentication ?</h2>
                        <p>Authentication is just like a verifying  process that what is the person is ? Is he/she a person or not  and Authorization is like a process that if he/she is a user he can access a specific website and a file or data.So,authenticate is who he is and and authorization is like a user get the services from the specific site</p>
                    </div>
                </div>

            </div>
            <div className='col'>
                <div className='card' style={{ marginBottom: '20px' }}>
                    <div className='card-body'>
                        <h2>Why am i using firebase and what other options do i have to implement authentication ?</h2>
                        <p>Firebase is a very quick and simple authentication system.I can easily crate a email password based authentication system by it.It is also effective for google and facebook or any other worldwide website authentication system.Other options like :Parse. Back4App.AWS Amplify.Kuzzle.Couchbase.NativeScript.RxDB.Flutter.</p>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className='card' style={{ marginBottom: '20px' }}>
                    <div className='card-body'>
                        <h2>What other services does firebase provide than other authentication ?</h2>
                        <p>Firebase Authentication provides us backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate for any other apps or website.Although firebase is easier than any oyher authentication system.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;