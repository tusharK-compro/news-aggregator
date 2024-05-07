import { Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material';


interface FilterProps{
  labels:Array<String>,
  setPreference?:any,
  preference?: any,
  type? : String
} 
const FilterGroup = styled(FormGroup)(() => ({
  padding: '0 10px'
}))
const handlePreferences = (e: any,prop:any) =>{
  const type = prop.type;
  const typeArr = [...prop.preference[type],e.target.value] 
  const prefrenceData = {...prop.preference,[type]:typeArr  }
  prop.setPreference(prefrenceData)
}

function Filter(props:FilterProps) {
  
      return <FilterGroup>{
        props.labels.map((preference)=>{

      return <FormControlLabel onChange={(e)=>handlePreferences(e,props)} value= {preference} control={<Checkbox />} label={preference} />
  
    })}
    </FilterGroup>
  

}

export default Filter;