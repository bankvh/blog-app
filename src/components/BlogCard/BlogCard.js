import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  const {
    title, created, imageUrl, description,
  } = blog;
  const [src, setSrc] = useState(imageUrl);
  const createdDate = new Date(created);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(createdDate);
  const formattedDate = `${month} ${createdDate.getDate()}, ${createdDate.getFullYear()}`;

  const onImageError = () => {
    setSrc('https://via.placeholder.com/300x170/000000/FFFFFF/?text=ERROR');
  };

  return (
    <div className="card">
      <img className="image" src={src} alt={title} onError={onImageError} />
      <div className="card-content">
        <p className="date-text">{formattedDate}</p>
        <p className="title-text">{title}</p>
        <div className="description-content" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="card-footer">
        <p className="footer-text">
          Continue Reading
          <span className="material-icons">keyboard_arrow_right</span>
        </p>
      </div>

    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
