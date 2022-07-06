import { Col, Row, Pagination, Breadcrumb } from "antd";
import React from "react";
import style from "./Berita.module.css"
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import axios from "axios";
import dateFormat from '../../../utils/helpers/dateFormat';
import { Link } from "react-router-dom";

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

  let sorted1 = news.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  let sorted2 = news.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  let sorted3 = news.sort((a, b) => new Date(b.publishedAt).getTime() -  new Date(a.publishedAt).getTime());
  
  return(
    <>
    <Col span={20} offset={2}>
    <Breadcrumb className={style.breadcrumb}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/news">News</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
    <h1 style={{marginTop:"24px", marginBottom:"48px"}}>Berita Terbaru</h1>
    </Col>

    <Row justify="center" gutter={[0,24]} style={{ gap:"16px"}}> 
    {news.length > 0 &&
      news
        .slice(state.minValue, state.maxValue) 
        .map((item, itemTdx) => {
        return (
    <Col lg= {{span: 5}} xs={{span: 16}} key={itemTdx} className={style.col}>
      <a href={item.url} target="_blank">
    <Col>
     <img src={item.urlToImage} alt="berita" className={style.img}/>
     <p className="body3" style={{marginTop:"14px", marginBottom:"8px"}}>{dateFormat(item.publishedAt, "date-month-year")}</p>
     <h4 style={{marginBottom:"16px"}}>{item.title}</h4>
     <p className="body2" style={{textAlign:"justify", marginBottom:"8px"}}>{item.description.slice(0,90) + (item.description.length > 90 ? ' . . .' : '')}</p>
     <p className="body3" style={{marginBottom:"8px"}}><UserOutlined className={style.icon}/> {item.author}</p>
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
