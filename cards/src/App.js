import React, { useState } from 'react';
import DataList from './components/DataList';
import DataDetails from './components/DataDetails';





const App = () => {

  const initialDataList = [
    { title: 'Item 1', description: 'Description of Item 1' },
    { title: 'Item 2', description: 'Description of Item 2' },
    // Add more data items as needed
  ];

  const [selectedData, setSelectedData] = useState(null);

  const handleDataItemClick = (data) => {
    setSelectedData(data);
  };

  return (
    <div>


      <h1>Data List with Material-UI Cards</h1>
      <DataList color="red"  variant="contained" dataList={initialDataList} onDataItemClick={handleDataItemClick} />
      {selectedData && <DataDetails selectedData={selectedData} />}
    </div>
  );
};

export default App;
