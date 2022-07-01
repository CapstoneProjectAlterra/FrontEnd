import { Col, Row, Pagination, Breadcrumb } from "antd";
import React from "react";
import style from "./Berita.module.css"
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import axios from "axios";
import dateFormat from '../../../utils/helpers/dateFormat';
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";

export default function News() {

  const [state, setState] = useState({
    minValue: 0,
    maxValue: 12,
  });
  const handleChange = (value) => {
    if (value <= 1) {
      setState({
        minValue: 0,
        maxValue: 12,
      });
    } else {
      setState({
        minValue: (value - 1) * 12,
        maxValue: value * 12,
      });
    }
  };

  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=covid&language=id&apiKey=23b92eb137c74f6eab5f15055aa1de69"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);
  
  return(
    <>
    <Col span={20} offset={2}>
          <Breadcrumb className={style.linkPath} style={{marginLeft:"16px"}}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem className={style.linkPathBold}>Berita</BreadcrumbItem>
          </Breadcrumb>

          <h1 className={style.texth1}>Berita Hari Ini</h1>
        </Col>
    <Row justify="center" gutter={[0,24]} style={{ gap:"8px"}}> 
    {news.length > 0 &&
      news
        .slice(state.minValue, state.maxValue) 
        .map((item, itemTdx) => {
        return (
    <Col lg= {{span: 5}} xs={{span: 16}} key={itemTdx} className={style.col}>
      <a href={item.url} target="_blank" style={{color:"black"}}>
    <Col>
     <img src={item.urlToImage} alt="berita" className={style.img}/>
     <div className={style.text}>
     <h5>{dateFormat(item.publishedAt, "date-month-year")}</h5>
     <h4 style={{marginBottom:"16px"}}>{item.title}</h4>
     <h5 className={style.description}><a href={item.url} target="_blank" style={{color:"black"}}>{item.description.slice(0,70) + (item.description.length > 70 ? ' . . .' : '')}</a></h5>
     <h5 style={{verticalAlign:"text-bottom"}}><UserOutlined className={style.icon}/> {item.author}</h5>
     </div>
    </Col>
    </a>
    </Col>
    );
  })}
    </Row>

    <div className={style.pagination}>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={12}
            onChange={handleChange}
            total={news.length}
          />
        </div>
    </>
  );
}
