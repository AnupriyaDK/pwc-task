import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CheckboxesGroup from  './checkBox/checkBox'
import './dropDown.css';

export default function SimpleAccordion() {
  return (
    <div className='menu-box'>
      <div className='topoption'>
          <div>
            Sort by reference
          </div>
          <div>
            <ExpandMoreIcon />
          </div>  
      </div>
      <Accordion  style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Application</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <CheckboxesGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Strength</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <CheckboxesGroup />
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Volume</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <CheckboxesGroup />
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Active Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <CheckboxesGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <CheckboxesGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dosage Form</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <CheckboxesGroup />
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
