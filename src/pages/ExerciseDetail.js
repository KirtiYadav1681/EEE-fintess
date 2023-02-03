import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { data } from '../data';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { youtubeOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
  const [ exerciseDetail, setExerciseDetail ] = useState(null);
  const [ exerciseVideos, setExerciseVideos ] = useState([]);
  const [ targetMuscleExercises, setTargetMuscleExercises ] = useState(null);
  const [ equipmentExercises, setEquipmentExercises ] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    const exerciseDetailData = data.AllExercises.filter((exercise) => exercise.id === id);
    const targetMuscleExercisesData = data.AllExercises.filter((exercise) => exercise.target === exerciseDetailData[0].target);
    const equipmentExerciseData = data.AllExercises.filter((exercise) => exercise.equipment === exerciseDetailData[0].equipment);
    
    const fetchExerciseData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData[0].name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }
    fetchExerciseData();
    setExerciseDetail(exerciseDetailData[0]);
    setTargetMuscleExercises(targetMuscleExercisesData);
    setEquipmentExercises(equipmentExerciseData);
  },[id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail?.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail