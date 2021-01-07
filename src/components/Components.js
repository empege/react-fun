import React from 'react';
import { Link } from 'react-router-dom';
import { components } from '../data'
import '../App.css';

const Components = () => {
  return (
    <div className="components">
      {components.map(component => {
        const {id, title, description, image, url} = component;
        return (
          <Link key={id} to={url} className="component">
            <img src={image} alt={title}/>
            <div className="component-info">
              <h2><i>Title:</i> {title}</h2>
              <p><i>Description:</i> {description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
};

export default Components;
