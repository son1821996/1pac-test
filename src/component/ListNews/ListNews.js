/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useContext } from 'react';

import { string } from 'prop-types';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

import axios from 'axios';
import get from 'lodash/get';

import NewsItem from './NewsItem/NewsItem';
import { CheckAuthContext } from '../../context/Context';

import './ListNews.scss';

let apiKey = '3a21753964284158938a2363aae2e3fd';

const ListNews = ({ type }) => {
  const [listNews, setListNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userProfile = useContext(CheckAuthContext);

  useEffect(() => {
    const getListNews = async () => {
      try {
        const response = await axios(`http://newsapi.org/v2/top-headlines?${getQueryString()}`);
        setListNews(get(response, 'data.articles', []));
        setIsLoading(false);
      } catch (e) {

      }
    };
    getListNews();
  }, []);

  const getQueryString = () => {
    let query = {
      country: 'us',
      apiKey,
    }
    if (type === 'custom' && !isEmpty(userProfile)) {
      query = {
        ...query,
        q: userProfile.interested,
      }
    }
    return queryString.stringify(query);
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <div>
          <div class="nb-spinner" />
        </div>
      )
    }
    if (!listNews.length) {
      return (
        <div>
          There is no news!
        </div>
      )
    }
    return (
      <>
        {(type === 'custom' && isEmpty(userProfile)) ? (
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
