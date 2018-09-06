import React from 'react'; 

const ListItem = (props) => (
  
  <div onClick={()=>{props.handleSelect(props.item.urlShort)}}>{props.item.urlShort}</div>

)

export default ListItem; 

