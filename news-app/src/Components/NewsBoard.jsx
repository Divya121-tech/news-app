import { useEffect, useState } from "react"
import NewsItems from "./NewsItems";

  

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]); 
    useEffect(()=>{
      let url = '  https://newsapi.org/v2/everything?q=tesla&from=2024-05-01&sortBy=publishedAt&apiKey=1fc422e1076345f0acefb97f6469d804'
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    }, [category]) 
  return (
      
    <div>
        <h2 className="text-center">Latests <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard