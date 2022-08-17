import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import Menu from './Menu';

const Layout = ({title='Title',  children}) => {
    useEffect(() =>{
        document.title=title;
    },[])
    return (
        <div>
            <div className='mb-3'>
                <Menu />
                
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Layout;