import React from 'react';
import { Link } from 'react-router-dom';
import { components } from '../data'
import '../App.css';

const Components = () => {
  return (
    <div className="components">
      {components.map(component => {
        const { id, title, github, description, image, url } = component;
        return (
          <a key={id} href={url} className="component">
            <img src={image} alt={title} />
            <div className="component-info">
              <h2><i>Title:</i> {title}</h2>
              <p><i>Description:</i> {description}</p><br></br>
              {github && <h4>{`Github: `}{github}</h4>}
            </div>
          </a>
        )
      })}
    </div>
  );
};

export default Components;
