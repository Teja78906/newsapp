import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component"
import './News.css';
export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8
  }
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props){
    super(props);
    console.log("hello i am a constructor from news components");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalArticles:0,
      imageUrl: "https://tinyhousetalk.com/wp-content/uploads/the-eNook-electric-camper-van-collaboration-with-Maxwell-Vehicles-ePro-chassis.jpg",
      Url: "https://www.engadget.com/apple-strikes-multibillion-dollar-deal-with-broadcom-for-5g-parts-144545299.html"
    }
document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`
  }
  
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: this.totalArticles + parsedData.totalResults,
      loading: false
  })
  }
  fetchMoreData = async ()=> {
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles:parsedData.totalResults,
      loading: false
  })
  } 
  render() {
    return (
      <div className="container-fluid backGround-image mt-5"  >
        <div className="row">
        <h2 className="text-center mt-3" style={{color:'ButtonHighlight'}}>Top {this.capitalizeFirstLetter(this.props.category)} headlines </h2><br></br>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalArticles !== this.state.articles.length}
          loader={<Spinner />}
          scrollableTarget="window" // This allows the component to listen to the window scroll
        >

          <div className="container">
        <div className="row">
        { this.state.articles.map((element,index)=>{
          return <div className="col-md-4 mt-3" key={`${element.url}-${index}`} >
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:this.state.imageUrl} newsUrl={element.url?element.url:this.state.Url} 
          author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    );
  }
}

export default News;
