import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography m={5} variant="h3" color="#fff">Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        { targetMuscleExercises?.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader message="Loading similar exercises"/>}
      </Stack>
      <Typography m={5} variant="h3" color="#fff">Exercises that use the same equipment</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        { equipmentExercises?.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader message="Loading similar exercises"/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises