import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MonthSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem>January</MenuItem>
          <MenuItem>February</MenuItem>
          <MenuItem>March</MenuItem>
          <MenuItem>April</MenuItem>
          <MenuItem>May</MenuItem>
          <MenuItem>June</MenuItem>
          <MenuItem>July</MenuItem>
          <MenuItem>August</MenuItem>
          <MenuItem>September</MenuItem>
          <MenuItem>October</MenuItem>
          <MenuItem>November</MenuItem>
          <MenuItem>December</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
