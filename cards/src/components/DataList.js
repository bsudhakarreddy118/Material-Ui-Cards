import React from 'react';
import '@material-ui/core/';
import  Grid  from '@mui/material/Grid';
import DataCard from './DataCard';

const DataList = ({ dataList, onDataItemClick }) => {
  return (
    <Grid container spacing={2}>
      {dataList.map((data, index) => (
        <Grid  variant="contained" color="success"  item xs={12} sm={6} md={4} key={index}>
          <DataCard  variant="contained" color="success" data={data} onItemClick={onDataItemClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DataList;
