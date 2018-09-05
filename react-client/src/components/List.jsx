import React, {Component} from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    
    There are { props.items.length } items.
    { 
      props.items.map((item, key) => 
        <ListItem 
          item={item} 
          key={key} 
          handleSelect={props.handleSelect}/>
    )}
  </div>
)

export default List; 