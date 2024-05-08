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
  type?: String;
  filters?: boolean;
  setDate?:any;
  date?:any
}
const FilterGroup = styled(FormGroup)(() => ({
  padding: "0 10px",
}));
const handlePreferences = (e: any, prop: any) => {
  const type = prop.type;
  const typeArr = [...prop.preference[type], e.target.value];
  const prefrenceData = { ...prop.preference, [type]: typeArr };
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
                control={<Checkbox />}
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
