import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Input, Button, Select, RTE} from '../index'
import {appwriteService} from '../../appwrite/config'

const PostForm = ({ post }) => {
  const {register, handleSubmit, getValue, setValue, control, watch} = useForm({
    defaultValues: {
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.status || ''
    }
  })

  const userData = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  return (
    <div>
      
    </div>
  );
};

export default PostForm;