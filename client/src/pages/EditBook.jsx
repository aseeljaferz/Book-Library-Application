import React, {useEffect, useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const editFun = async () =>{
    try {
      const res = await axios .get(`http://localhost:5555/books/${id}`);
        if(res.status==200){
          setTitle(res.data.title);
          setAuthor(res.data.author);
          setPublishYear(res.data.publishYear);
          setLoading(false);
        }else{
          setLoading(false);
          alert('An error occured, please check console');
          console.log(error);
        }
        } catch (error) {
          console.log(error);
        }
      }

  useEffect(() => {
      setLoading(true);
      editFun();
  }, [])

  const handlEditBook = async () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    try{
      const edit = await axios .put(`http://localhost:5555/books/${id}`, data);
      setLoading(false);
      enqueueSnackbar('Book Edited successfully', {variant: 'success'});
      navigate('/');
    }catch(error){
      setLoading(false);
      enqueueSnackbar('error', {variant: 'error'});
      console.log(error);
    }

  }

  return (
    <div className='p-4'>
      <BackButton/>
      <div className='text-3xl my-4'>Edit Book</div>
      {loading ? <Spinner/> : '' }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-5 m-auto'>
        <div className='flex lg:flex-row justify-between items-center my-4 '>
          <div className='text-xl mr-4 text-grey-500'>Title</div>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2 w-full'
          />
        </div>
        <div className='flex lg:flex-row justify-between items-center my-4'>
          <div className='text-xl mr-4 text-grey-500'>Author</div>
          <input 
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2 w-full'
          />
        </div>
        <div className='flex lg:flex-row justify-between items-center my-4'>
          <div className='text-xl mr-4 text-grey-500'>Publish Year</div>
          <input 
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-grey-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handlEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook