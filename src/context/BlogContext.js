import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  // const blogPosts = [ {title: 'Blog Post #1'}, {title: 'Blog Post #2'}];
  // Without using the hardcoded state, we can make use of the react hook `useState` as follows.
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = (blogPost) => {
    setBlogPosts([...blogPosts, { title: `Blog Post ${blogPosts.length + 1}`}]);
  };


  return (
      <BlogContext.Provider
          value={{
            data: blogPosts,
            addBlogPost,
          }}
      >
        {children}
      </BlogContext.Provider>
  );
};

export default BlogContext;