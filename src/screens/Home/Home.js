import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import './Home.css';

const Home = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://us-central1-erx-frontend-test.cloudfunctions.net/blog');
      const data = await res.json();

      setBlogList(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      { isLoading ? <p>Loading...</p>
        : (
          <>
            <h2 className="title">Blog List</h2>
            <div className="blog-container">
              {blogList.map((value) => (
                <BlogCard blog={value} key={value.id} />
              ))}
            </div>
          </>
        )}
    </>
  );
};

export default Home;
