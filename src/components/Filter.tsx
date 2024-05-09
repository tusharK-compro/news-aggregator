import { Checkbox, FormControlLabel, FormGroup, styled } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface FilterProps {
  labels: Array<String>;
  setPreference?: any;
  preference?: any;
  type?: any;
  filters?: boolean;
  setDate?:any;
  date?:any
}
const FilterGroup = styled(FormGroup)(() => ({
  padding: "0 10px",
}));
const handlePreferences = (e: any, prop: any) => {
  
  console.log(e)
  const type = prop.type;
  let typeArr ;
  let prefrenceData;
  if(e.target.checked){
    typeArr = [...prop.preference[type], e.target.value];
  }
  else{
    const index = prop.preference[type].indexOf(e.target.value);
    typeArr = prop.preference[type].slice(index+1,1);  
  }
  prefrenceData = { ...prop.preference, [type]: typeArr };
  prop.setPreference(prefrenceData);
};

function Filter(props: FilterProps) {
  return (
    <>
      {props.filters == true ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={props.date}
            onChange={(newValue) => props.setDate(newValue)}
          />
        </LocalizationProvider>
      ) : (
        <FilterGroup>
          {props.labels.map((preference) => {
            return (
              <FormControlLabel
                onChange={(e) => handlePreferences(e, props)}
                value={preference}
                control={props.preference[props.type].includes(preference)?<Checkbox defaultChecked/>: <Checkbox/>}
                label={preference}
              />
            );
          })}
        </FilterGroup>
      )}
    </>
  );
}

export default Filter;
