import React from 'react';
import Nav from './Nav';

export default class Overview extends React.Component{
    render = () => {
        return (
            <div>
                <div className="body overview">
                    <h1 className="page-title">Overview</h1>
                    <div className="content">
                        <p style={{color: 'red'}}>{this.props.streamCounter}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque debitis dicta dolore eligendi nulla officiis porro quasi repellat sunt.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque debitis dicta dolore eligendi nulla officiis porro quasi repellat sunt.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque debitis dicta dolore eligendi nulla officiis porro quasi repellat sunt.</p>
                    </div>
                </div>
            </div>
        );
    }
}