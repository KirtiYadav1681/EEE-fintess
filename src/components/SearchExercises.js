import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { data } from '../data';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [ search, setSearch ] = useState('');
  const [ bodyParts, setBodyParts ]= useState([]);

  useEffect(() => {
    setBodyParts(data.bodyParts);
  },[]);

  const handleSearch = () => {
    if(search) { 
      const searchedExercise = data.AllExercises.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercise);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} color="#fff" sx={{ fontSize: { lg: '44px', xs: '30px' }}} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px'}, width: { lg: '800px', xs: '300px'}, backgroundColor: "#fff", borderRadius: "4px"}}
          height="76px"
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase())}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
          className="search-btn" 
          sx={{ bgcolor: '#0075F6', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', borderRadius: "4px", position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ width: '100%', p: '20px' }}>
        <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
          <HorizontalScrollbar data={bodyParts} isBodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Stack>
      </Box>
    </Stack>
  )
}

export default SearchExercises