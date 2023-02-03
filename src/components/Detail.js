import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import { FaDumbbell,FaRunning } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr'

const Detail = ({ exerciseDetail }) => {
  const extraDetail = [
    {
      icon: <GrYoga size={45} color="#0075F6"/>,
      name: exerciseDetail?.bodyPart
    },
    {
      icon: <FaRunning size={45} color="#0075F6"/>,
      name: exerciseDetail?.target
    },
    {
      icon: <FaDumbbell size={45} color="#0075F6"/>,
      name: exerciseDetail?.equipment
    }
  ]

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'}}>
      <img src={exerciseDetail?.gifUrl} alt={exerciseDetail?.name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px'}}}>
        <Typography variant="h3" textTransform='capitalize' color="#fff">
          {exerciseDetail?.name}
        </Typography>
        <Typography variant="h6" color="#fff" sx={{ opacity: '0.7' }}>
          Exercises keep you strong. <span style={{ textTransform: 'capitalize'}}>{exerciseDetail?.name}</span>{' '} is one of the best exercises for <b>{exerciseDetail?.bodyPart}</b> and targets your <b>{exerciseDetail?.target}</b>. <span style={{ textTransform: 'capitalize'}}>{exerciseDetail?.name}</span>{' '} needs <b>{exerciseDetail?.equipment}</b> as equipment and helps you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction='row' gap='24px' alignItems='center'> 
            <Button sx={{ background: '#fff', borderRadius: '50%', width: '100px', height: '100px'}}>
              {item.icon}
            </Button>
            <Typography variant='h5' textTransform='capitalize' color="#fff">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail