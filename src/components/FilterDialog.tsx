import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Filter from './Filter';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography sx={{display:{ xs: 'block', sm: 'flex' }}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root':{
    [theme.breakpoints.down('sm')]: {
      height:'100%',
      margin:'20px'
    },
  },
  
}));


export default function FilterDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    
  }

  return (
    <React.Fragment>
      <Button
            variant="text"
            color="primary"
            sx={{textTransform:'none', display: { xs: 'none', sm: 'flex' }}}
            onClick={handleClickOpen}
            startIcon={<TuneOutlinedIcon />}
            >
            Preferences
        </Button>
        <Button
            sx={{ display: { xs: 'block', sm: 'none' }}}
            onClick={handleClickOpen}
            startIcon={<TuneOutlinedIcon />}
            >
        </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Set Preferences
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: 160, minWidth:{ sm: '600px' } }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{overflow:'unset'}}
      >
        <Tab label="Sources"  />
        <Tab label="Categories" />
        <Tab label="Authors"  />
     
      </Tabs>
      <TabPanel value={value} index={0}>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Filter/>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Filter/>
        
      </TabPanel>
  
    </Box>
        
        </DialogContent>
        <DialogActions>
         <Button sx={{textTransform:'none'}} onClick={handleClear} >
            Clear All
          </Button>
          <Button sx={{textTransform:'none'}} autoFocus onClick={handleClose}>
            Apply
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
