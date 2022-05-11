import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'


const AddBook = () => {
const[inputs, setInputs] = useState({
  name: '',
  description: '',
  price: '',
  author: '',
  available: 'false',
  image: ''
});
const [checked, setChanged] = useState(false);
const handleChange = (e) =>{
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs, checked);
}

  return (<form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop ={10}>
      <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'> </TextField>
      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'> </TextField>
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'> </TextField>
      <FormLabel>Price</FormLabel>
      <TextField type={"number"} value={inputs.price} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='price'> </TextField>
      <FormLabel>Image</FormLabel>
      <TextField value={inputs.image} onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='image'> </TextField>
      <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChanged(!checked)}/>} label ="Available" />
      <Button variant='contained' type='submit'>Add Book</Button>
    </Box>
  </form>
  )
}

export default AddBook
