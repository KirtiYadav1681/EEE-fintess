import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';
import { data } from '../data';
import ExerciseCard from './ExerciseCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#0075F6',
      contrastText: '#fff',
    },
  },
});

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [ currentPage, sertCurrentPage ] = useState(1);
  const [exercisesPerPage] = useState(9);
  
  useEffect(() => {
      let exercisesData = [];
      switch (bodyPart.toLowerCase()) {
        case 'all':
          exercisesData = data.AllExercises;
          break;
        case 'back':
          exercisesData = data.backExercises;
          break;
        case 'cardio':
          exercisesData = data.cardioExercises;
          break;
        case 'chest':
          exercisesData = data.chestExercises;
          break;
        case 'lower arms':
          exercisesData = data.lowerArmsExercises;
          break;
        case 'lower-arms':
          exercisesData = data.lowerArmsExercises;
          break;
        case 'lowerarms':
          exercisesData = data.lowerArmsExercises;
          break;
        case 'lower legs':
          exercisesData = data.lowerLegsExercise;
          break;
        case 'lower-legs':
          exercisesData = data.lowerLegsExercise;
          break;
        case 'lowerlegs':
          exercisesData = data.lowerLegsExercise;
          break;
        case 'neck':
          exercisesData = data.neckExercises;
          break;
        case 'shoulders':
          exercisesData = data.shouldersExercises;
          break;
        case 'upper arms':
          exercisesData = data.upperArmsExercises;
          break;
        case 'upper-arms':
          exercisesData = data.upperArmsExercises;
          break;
        case 'upperarms':
          exercisesData = data.upperArmsExercises;
          break;
        case 'upper legs':
          exercisesData = data.upperLegsExercises;
          break;
        case 'upper-legs':
          exercisesData = data.upperLegsExercises;
          break;
        case 'upperlegs':
          exercisesData = data.upperLegsExercises;
          break;
        case 'waist':
          exercisesData = data.waistExercises;
          break;
        default:
          exercisesData = [];
          break;
      }
      setExercises(exercisesData);
  },[bodyPart, setExercises]);

  if(!exercises.length) return <Loader message="Invalid search, please try again" />;

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = ( event, value )  => {
    sertCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px '}}}
      mt='50px'
      p='20px'
    >
      <Typography variant="h3" mb="46px" color="#fff" ml="15px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
        { currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <ThemeProvider theme={theme}>
            <Pagination 
              color="neutral"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          </ThemeProvider>
          )}
      </Stack>
    </Box>
  )
}

export default Exercises