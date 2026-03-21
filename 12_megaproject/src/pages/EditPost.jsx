import React, {useEffect, useState} from 'react';
import { appwriteService } from '../appwrite/config';
import { Container, PostCard } from '../components/index';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = ({ props }) => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(slug) {
        appwriteService.getPost(slug).then((post) => {
            if(post){
                setPost(post)
            }
        })
    }
    else {
        navigate('/')
    }
    
  }, [slug, navigate]);

  return post ? (
    <div className='w-full py-8'>
      <Container>
        <PostCard post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;