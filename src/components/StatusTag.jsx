import React from 'react'
const StatusTag = ({status}) => {
  
  if(status !== undefined){
    switch(status[0]) {
      case 'IN_PROGRESS':
        return (<span className="tag is-small is-warning" style={{ marginRight: 20 }}>In Progress</span>)
      case 'ARCHIVED':
        return (<span className="tag is-small is-danger" style={{ marginRight: 20 }}>Archived</span>)
      default:
        return (<span></span>)
    }
  } else{
    return (<span></span>)
  }
}
export default StatusTag