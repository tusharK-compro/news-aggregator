import { Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material';

const FilterGroup = styled(FormGroup)(() => ({
  padding: '0 10px'
}))
function Filter() {
  return (
    <>
      <FilterGroup>
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} label="Label" />
      </FilterGroup>
    </>
  );
}

export default Filter;