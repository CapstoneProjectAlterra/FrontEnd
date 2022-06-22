import { Col, Row } from "antd";
import React from "react";
import style from "./Berita.module.css"
import { UserOutlined } from '@ant-design/icons';

const listberita = [
    {
        key: '1',
        title: 'Berita 1',
        date: '16 Juni 2021',
        content: 'Blusheets said it’s helping over 10,000 companies automate their financial data.',
        img: 'assets/illustration/news-dummy.png',
        writer: 'Bloomberg',
    },
    {
        key: '2',
        title: 'Berita 2',
        date: '15 Juni 2021',
        content: 'Blusheets said it’s helping over 10,000 companies automate their financial data.',
        img: 'assets/illustration/news-dummy.png',
        writer: 'Bloomberg',
    },
    {
        key: '3',
        title: 'Berita 3',
        date: '17 Juni 2021',
        content: 'Blusheets said it’s helping over 10,000 companies automate their financial data.',
        img: 'assets/illustration/news-dummy.png',
        writer: 'Bloomberg',
    },
  ]

function Berita(){
    return(
        <>
        <br/>
        <Row justify="space-evenly" gutter={[0,48]}>   
        {listberita.map(item => {
            return (
         <Col lg= {{span: 5}} xs={{span: 16}} key={item.key} justify="center" className={style.col}>
        <Col>
         <img src={require(`../../${item.img}`)} alt="berita" className={style.img}/>
         <div className={style.text}>
         <h5>{item.date}</h5>
         <h4>{item.title}</h4>
         <h5 className={style.content}>{item.content}</h5>
         <h5><UserOutlined className={style.icon}/> {item.writer}</h5>
         </div>
        </Col>
        </Col>
        );})}
        </Row>
        </>
        )
    }



export default Berita;
