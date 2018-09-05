import React from 'react'; 

const ListItem = (props) => (
  
  <div onClick={()=>{props.handleSelect(props.item)}}>{props.item}</div>

)

export default ListItem; 

