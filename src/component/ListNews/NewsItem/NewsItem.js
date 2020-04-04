import React from 'react';

import { Link } from 'react-router-dom';

import './NewsItem.scss';

const NewsItem = ({ item }) => {

  const onSaveItemDetail = (item) => {
    localStorage.setItem('news_detail', JSON.stringify(item));
  }

  return (
    <div className="news-item">
      <div className="news-image">
        <img 
          src={item.urlToImage ? item.urlToImage : 'https://www.sane.org/components/com_easyblog/themes/wireframe/images/placeholder-image.png'} 
          alt="news-img" 
        />
      </div>
      <div className="news-thumb-content">
        <Link
          to="/news-detail" 
          className="news-title"
          onClick={() => onSaveItemDetail(item)}
        >
          {item.title}
        </Link>
        <div className="news-author">
          {item.author}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
