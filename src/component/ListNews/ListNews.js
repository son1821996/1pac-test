/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';

import { string } from 'prop-types';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

import axios from 'axios';
import get from 'lodash/get';

import NewsItem from './NewsItem/NewsItem';
import { UserProfileContext } from '../../context/Context';

import './ListNews.scss';

const apiKey = '3a21753964284158938a2363aae2e3fd';

const ListNews = ({ type }) => {
  const [listNews, setListNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalRecord, setTotalRecord] = useState(0);
  const [page, setPage] = useState(0);
  const userProfile = useContext(UserProfileContext);
  const isLogin = !isEmpty(userProfile);

  useEffect(() => {
    const getListNews = async () => {
      handleLoadNews();
    };
    getListNews();
  }, [isLogin, type]);

  const getQueryString = () => {
    let query = {
      pageSize: 10,
      page: page + 1,
      country: 'us',
      apiKey,
    }
    setPage(page + 1);
    if (type === 'custom' && isLogin) {
      query = {
        ...query,
        q: userProfile.interested,
      }
    }
    return queryString.stringify(query);
  }

  const handleLoadNews = async () => {
    try {
      if (isLogin || (!isLogin && type === 'headlines')) {
        const response = await axios(`http://newsapi.org/v2/top-headlines?${getQueryString()}`);
        const listNewsResponse = get(response, 'data.articles', []);
        setListNews(listNews.concat(listNewsResponse));
        setTotalRecord(get(response, 'data.totalResults', 0));
        return setIsLoading(false);
      }
      setListNews([]);
      return setIsLoading(false);
    } catch (e) {
      console.log('e', e);
    }
  }

  const renderLoadmoreBtn = () => {
    if (page * 10 < totalRecord) {
      return (
        <button onClick={handleLoadNews}>
          Loadmore
        </button>
      )
    }
    return '';
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <div>
          <div className="nb-spinner" />
        </div>
      )
    }
    if (!listNews.length && isLogin) {
      return (
        <div>
          There is no news!
        </div>
      )
    }
    return (
      <>
        {(type === 'custom' && !isLogin) ? (
          <h2>
            Please Login
          </h2>
        ) : (
          <div>
          {(listNews || []).map(((item, index) => (
            <NewsItem
              key={index}
              item={item}
            />
          )))}
          {renderLoadmoreBtn()}
          </div>
        )}
      </>
    )
  }

  return (
    <div className="list-news">
      {renderContent()}
    </div>
  )
};

ListNews.propTypes = {
  type: string,
};

ListNews.defaultProps = {
  type: 'headline'
}

export default ListNews;
