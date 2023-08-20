import React from 'react';
import '@material-ui/core/';
import Card from '@mui/material/Card';
import {  CardContent, Typography } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';

const DataCard = ({ data, onItemClick }) => {
  return (
    <Card  sx={{ maxWidth: 345 }}  onClick={() => onItemClick(data)}>
      <CardActionArea>
        <CardContent >
          <Typography variant="h6"  color="text.secondary">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">{data.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DataCard;
