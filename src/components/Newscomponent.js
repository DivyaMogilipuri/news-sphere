import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class Newscomponent extends Component {
   
    state={
        articles:this.articles,
        loading:false,
        page:0,
        total:0
        

    }

    async update(){
      this.props.setprogress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4c207e1bcac443b9852b20117967718f&category=${this.props.category}`
        let data=await fetch(url)
        this.props.setprogress(50)
        let parseddata=await data.json()
        this.props.setprogress(80)
       console.log(this.props.progress)
        console.log(parseddata)
        this.setState({
            articles:parseddata.articles,


        })
        this.props.setprogress(100)

    }
    async componentDidMount(){
      this.update()
    }
  render(props) {
    
    return (
    <div className='container my-5'>
         <div className="row mx-4">
          
        {this.state.articles?this.state.articles.map((element)=>{
        return  <>
        <div className='col-md-4'>
<Newsitem img={element.urlToImage} title={element.title} description={element.description} url={element.url} source={element.source.name}/></div></>
         
        }
        ):console.log("error ocurred")
  }

       
</div>
</div>
     
)
          }

        }
export default Newscomponent
