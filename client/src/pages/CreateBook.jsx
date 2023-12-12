import React, {useEffect, useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handlseSaveBook = async() => {
    const data = {
      title,
      author,
      publishYear,
    };

    
    try{
      const res = await axios .post(`http://localhost:5555/books`,data)
      setLoading(false);
      enqueueSnackbar('Book Created successfully', {variant: 'success'});
      navigate('/');
    }catch(error){
      setLoading(false);
      enqueueSnackbar('error', {variant: 'error'});
      console.log(error);
    }
    // axios
    //   .post(`http://localhost:5555/books`,data)
    //   .then(() => {
    //     setLoading(false);
    //     navigate('/');
    //   })
    //   .catch((erroe) => {
    //     setLoading(false);
    //     alert('An error happened, please check console');
    //     console.log(error);
    //   })

  }

  return (
    <div className='p-4'>
      <BackButton/>
      <div className='text-3xl my-4'>Create Book</div>
      {loading ? <Spinner/> : '' }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <div className='text-xl mr-4 text-grey-500'>Title</div>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <div className='text-xl mr-4 text-grey-500'>Author</div>
          <input 
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <div className='text-xl mr-4 text-grey-500'>Publish Year</div>
          <input 
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handlseSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBook