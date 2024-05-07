import { Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material';


interface FilterProps{
  labels:Array<String>
}
const FilterGroup = styled(FormGroup)(() => ({
  padding: '0 10px'
}))

function Filter(props:FilterProps) {
  
      return <FilterGroup>{
        props.labels.map((preference)=>{

      return <FormControlLabel control={<Checkbox />} label={preference} />
  
    })}
    </FilterGroup>
  

}

export default Filter;