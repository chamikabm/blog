/**
 *  This code shows how we can use the `useReducer` hooks and Context API to
 *  Manage Component states, This code was used and refactored in the new
 *  version to use the `createDataContext` util to make more generic solution to
 *  create the Context and Providers, as such we can make use of the `createDataContext`
 *  to generate Context and Provider for any kind of a state that we need to manage in the
 *  future.
 */
import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {

  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post ${state.length + 1}`}];

    default:
      return state;

  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return (
      <BlogContext.Provider
          value={{
            data: blogPosts,
            addBlogPost
          }}
      >
        {children}
      </BlogContext.Provider>
  );
};

export default BlogContext;