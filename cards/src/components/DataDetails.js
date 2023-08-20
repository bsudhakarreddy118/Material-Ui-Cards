import React from 'react';
import '@material-ui/core/';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const DataDetails = ({ selectedData }) => {
  return (
    <Card   >
      <CardContent  >
        <Typography variant="h6" component="div">
          {selectedData.title}
        </Typography>
        <Typography variant="body2">{selectedData.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default DataDetails;
