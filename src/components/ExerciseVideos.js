import React from 'react';
import { Box, Stack, Typography,Tooltip } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if(!exerciseVideos.length) return <Loader message="Loading youtube video"/>;

  return (
    <Box sx={{ marginTop: { lg: '200px' , xs: '20px'}}} p="20px">
      <Typography variant="h3" mb="33px" color="#fff" sx = {{ marginLeft: { lg : 4 , xs: 0}}}>
        Watch <span style={{ color: '#0075F6', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='center' flexWrap='wrap' alignItems='center' sx={{ flexDirection: { lg: 'row'}, gap: { lg: '110px', xs : '0'}}}>
        {exerciseVideos?.slice(0,6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_balnk"
            rel="noreferrer"
          >
          <Tooltip title='Click to see full video' placement='top'>
            <Box position='relative'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ borderRadius: '5px' }} height='200px'/>
            <Typography variant="h6" color="#fff">
                {item.video.title}
              </Typography>
              <Typography color='#fff' position='absolute' top='0' p={1} backgroundColor='rgba(0,0,0,0.8)' fontSize={12} sx={{ borderBottomRightRadius: '5px', opacity: '0.5' }}>
                {item.video.channelName}
              </Typography>
            </Box>
          </Tooltip>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos