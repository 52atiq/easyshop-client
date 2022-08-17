import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import Menu from './Menu';

const Layout = ({title='Title',  children, className}) => {
    useEffect(() =>{
        document.title=title;
    },[])
    return (
        <div>
            <div className='mb-3'>
                <Menu />
                
            </div>
            <div className={className}>{children}</div>
        </div>
    );
};

export default Layout;