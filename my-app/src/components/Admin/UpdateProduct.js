import { IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './createproduct.css'
import {useSnackbar} from 'notistack'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { UpdateProducts, getproddetials } from '../../actions/ProductActions';
import { NavLink, useParams } from 'react-router-dom';
import Loader from '../layout/Loader/Loader';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const UpdateProduct = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [stock, setStock] = useState('')
  const [waranty, setWaranty] = useState('')
  const [decr, setDecr] = useState('')
  const [price, setPrice] = useState('')
  const [curted, setCurted] = useState('')
  // const [value, setValue] = useState([])
  const [files, setFiles] = useState([])
  const [value, setValue] = useState([])
  const [oldimgs, setOldimgs] = useState([])
  const [features, setFeatures] = useState([])
  const [featurevalue, setFeatureValue] = useState('')

  const dispatch = useDispatch()
  const {enqueueSnackbar}  = useSnackbar()
  const { id } = useParams()

  const { product } = useSelector(state => state.ProductDetial)
  const { isUpdated , loading } = useSelector(state => state.ProductDetial)


  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append("title", title)
    formData.append("category", category)
    formData.append("decr", decr)
    formData.append("stock", stock)
    formData.append("price", price)
    formData.append("waranty", waranty)
    formData.append("brand", brand)
    formData.append("cureted_price", curted)
    
    if(files.length > 0){
      files.forEach((image) => {
        formData.append("images", image);
      });
    }

    features.forEach((feature) => {
      formData.append("features", feature);
    });
    
    dispatch(UpdateProducts(formData , id))
  }

  const file = (e) => {

    const files = Array.from(e.target.files)
    // setFiles([])
    // setValue([]);

    const reader = new FileReader()

    files.forEach((file) => {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFiles((old) => [...old, reader.result]);
          setValue((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file)

    })

  }
 

  const addfeature = () => {
    if (featurevalue.length === 0) {
      return enqueueSnackbar('Please enter a feature', { variant: 'error' })
    }
    setFeatures((prev) => [...prev, featurevalue]);
    setFeatureValue('')
  }


  const removefeature = (e, key) => {
    console.log(key);
    setFeatures((prev) => prev.filter((elem, i) => i !== key))
  }


  useEffect(() => {
   if(product){
    if(product._id !== id){
      dispatch(getproddetials(id))
    }else{
         setTitle(product.title)
         setCategory(product.category)
         setWaranty(product.waranty)
         setStock(product.stock)
         setPrice(product.price)
         setDecr(product.decr)
         setBrand(product.brand)
         setCurted(product.cureted_price)
         setOldimgs(product.images)
         setFeatures(product.features)
    }
  }

   if(isUpdated){
      enqueueSnackbar("Update done" , {variant: 'success'})
   }
    
  }, [id, dispatch , product , isUpdated , enqueueSnackbar])



  return (
    <>
    { loading ? <Loader/> : 
    
    <form onSubmit={(e) => submit(e)} className=' rounded'>
      {/* <!-- Heading> */}
      <div className=' flex justify-between items-center my-2 mb-6'>
        <NavLink to={'/admin/products'}>
        <button className='bg-primary flex items-center gap-1 text-white p-3 py-1 rounded-full'>
          <KeyboardBackspaceIcon/>
            <span>Back</span>
        </button>
        </NavLink>
        <h1 className=' text-2xl font-semibold'>Update Product</h1>
        <button type='submit' className=' bg-primary text-white py-2 px-10 font-bold rounded-sm hover:bg-blue-600'>Save</button>
      </div>
      {/* <!-- Heading> */}

      <div className=' flex w-full gap-4'>

        {/* <!-- Left Container> */}
        <div className='flex flex-col w-3/5 gap-4'>

          {/* general info ( name , category , stock , waranty , brand , price , cuted price ) */}
          <div className=' bg-white p-6 flex w-full shadow rounded flex-col gap-5'>
            <h1 className=' text-xl font-medium'>1. General Info</h1>
            <TextField
              label="Product Name*"
              size='small'
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className=' flex items-center gap-5'>
              <TextField
                label="category"
                size='small'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                label="stock"
                size='small'
                type='number'
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />

              <TextField
                label="Waruanty"
                size='small'
                value={waranty}
                onChange={(e) => setWaranty(e.target.value)}
              />
            </div>
            <div className='flex items-center gap-5'>
              <TextField
                label="Brand"
                size='small'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <TextField
                label="Price"
                size='small'
                type='number'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                label="Cuted Price"
                size='small'
                type='number'
                value={curted}
                onChange={(e) => setCurted(e.target.value)}
              />
            </div>
          </div>
          {/* general info */}

          {/* <!-- description box> */}
          <div className='bg-white p-6 flex w-full rounded flex-col gap-4'>
            <h1 className=' text-xl font-medium '>2. Description</h1>
            <TextField
              rows={5}
              multiline
              label='Full Description'
              size={'small'}
              value={decr}
              onChange={(e) => setDecr(e.target.value)}
            />
          </div>
          {/* <!-- description box> */}

          {/* <!-- images container> */}
          <div className=' bg-white p-5 flex flex-col gap-4'>
            <h1 className=' text-xl font-medium'> 3. Images</h1>
            <div className=' flex gap-4'>
              <div className=' border border-t-0 grid grid-cols-5 gap-2'>


              {
                  oldimgs && oldimgs.map((elem) => {
                    return (
                      <div className='img relative overflow-hidden'>
                        <img className='h-24 w-full border p-3 rounded' src={elem.url} alt="" />
                        <div className=' delete absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                          <DeleteIcon className=' mx-1 cursor-pointer text-red-500' />
                          <RemoveRedEyeIcon className=' mx-1 cursor-pointer text-primary' />
                        </div>
                      </div>
                    )
                  })
                }

                {
                  value && value.map((elem) => {
                    return (
                      <div className='img relative overflow-hidden'>
                        <img className=' h-24 w-full border p-3 rounded' src={elem} alt="" />
                        <div className=' delete absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                          <DeleteIcon className=' mx-1 cursor-pointer text-red-500' />
                          <RemoveRedEyeIcon className=' mx-1 cursor-pointer text-primary' />
                        </div>
                      </div>
                    )
                  })
                }






              </div>
              <div className=' w-24 h-24 rounded-sm bg-[#f7f7f7] border flex flex-col justify-center items-center'>
                <input multiple={true} onChange={(e) => { file(e) }} type="file" id='file-input' className=' hidden ' />
                <label htmlFor="file-input" className=' w-full block '>
                  <div className=' flex flex-col justify-center items-center'>
                    <IconButton>
                      <CloudUploadIcon color='primary' />
                    </IconButton>
                    <h1 className=' text-sm'>Upload</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* <!-- images container> */}
        </div>
        {/* <!-- Left Container> */}


        {/* <!-- Right Containiner> */}
        <div className=' w-2/5 bg-white flex flex-col gap-6  rounded p-4'>
          <h1 className=' text-xl font-medium '>4. Features</h1>
          <div className='flex justify-between'>
            <TextField
              size='small'
              label='Features....'
              fullWidth
              value={featurevalue}
              onChange={(e) => setFeatureValue(e.target.value)}
            />
            <button 
            onClick={addfeature}
            type='button'
            className=' bg-primary text-white py-1 px-6 rounded-sm rounded-l-none'>Add</button>
          </div>
          {/* <!-- Features Container> */}
          <div>
            <ul className=' flex flex-col gap-2'>
            {
                      features.length > 0 ?
                        features.map((elem, index) => {
                          return (
                            <li key={index} className=' bg-sky-100 rounded-sm p-2 px-4 flex justify-between items-center'>
                              <h1>{elem}</h1>
                              <IconButton
                                onClick={(e) => { removefeature(e, index) }}
                                sx={{ background: 'lightblue' }}>
                                <DeleteIcon />
                              </IconButton>
                            </li>
                          )
                        })

                        :
                        <h1 className='  text-gray-500 text-xl text-center italic'>No Features Added</h1>
                    }
            </ul>
          </div>
          {/* <!-- Features Container> */}

        </div>
        {/* <!-- Right Containiner> */}


      </div>

    </form>
    
    }
    
    </>
  )
}

export default UpdateProduct