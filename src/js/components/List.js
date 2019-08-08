import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.length > 0 ? ( 
      articles.map(article => (
      <li className="list-group-item" key={article.id}>
        {article.title}
      </li>
    ))
    ) : (
      <li className="list-group-item">
        <p>No articles available</p>
      </li>
    ) }
  </ul>
);

ConnectedList.propTypes = {
    articles: PropTypes.array.isRequired
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;