import React, { Component } from 'react'

export class Newsitem extends Component {
  render(props) {
    let {title,description,url,img,source}=this.props
    
    return (
      <div>
    
        <div className={`card my-5 `} >
  <a href={url}><img src={img!=null?img:"https://miro.medium.com/v2/resize:fit:1200/1*kkp0yU4Aucdk-Ol87vivYQ.jpeg"} className="card-img-top" alt="..."/>
  </a>
  <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{position:'relative',left:'0',textAlign:"center"}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}.</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
  

</div>
      </div>
    )
  }
}

export default Newsitem
