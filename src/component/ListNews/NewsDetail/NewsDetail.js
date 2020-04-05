import React from 'react';

import './NewsDetail.scss';

const NewsDetail = () => {
  const newsDetail =  JSON.parse(localStorage.getItem('news_detail'));

  return (
    <div className="news-detail-container">
      <img src={newsDetail.urlToImage} alt="news-img" className="news-detail-image" />
      <div className="news-detail-content">
        <div className="news-title">
          {newsDetail.title}
        </div>
        <div className="news-author">
          {newsDetail.author}
        </div>
        <div>
          Original Link:&nbsp;
          <a href={newsDetail.url} target="_blank" rel="noopener noreferrer">
            {newsDetail.url}
          </a>
        </div>
        <div className="news-description">
          {newsDetail.description}
        </div>
        <div className="news-content">
          {newsDetail.content}
        </div>
      </div>
    </div>
  )
};

export default NewsDetail;
