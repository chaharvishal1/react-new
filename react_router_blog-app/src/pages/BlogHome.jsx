import React from 'react';
import { Link, useSearchParams } from 'react-router';

const dummyData = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.'
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post.'
  },
  {
    id: 3,
    title: 'Third Post',
    content: 'This is the content of the third post.'
  },
  {
    id: 4,
    title: 'Fourth Post',
    content: 'This is the content of the fourth post.'
  },
  {
    id: 5,
    title: 'Fifth Post',
    content: 'This is the content of the fifth post.'
  }
];

const BlogHome = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('search') || '';
  const filterData = query ? dummyData.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  ) : dummyData;

  return (
    <>
      <div className="container mx-auto px-4">
        <br></br>
        <br></br>
        <div className="bg-gray-100 p-4 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setSearchParam({ search: e.target.value })}
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <ul className="gap-4 mt-4 text-left">
        {filterData.map((post) => (
          <li key={post.id} className="px-4 mt-4">
            <Link
              to={`/blog/${post.id}`}
              className="block bg-white p-4 rounded-lg hover:bg-gray-100"
            >
              <h2 className="text-xl font-bold mb-2">{post.content}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogHome;