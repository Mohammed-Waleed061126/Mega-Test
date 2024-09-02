import React from 'react';

import "./../assets/css/components/navbar.css"

export default function Navbar({
    title, 
    children
}) {
    return (
        <div className="main-container-nav">
            <div className="container">
            <div className=" navbar navbar-expand-md">
                {children}
                <h1 className="navbar-brand">{title}</h1>
            </div>
            </div>
        </div>
  )
}