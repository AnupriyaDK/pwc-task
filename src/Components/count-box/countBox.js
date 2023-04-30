import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import './countBox.css';
import { red } from "@mui/material/colors";

function IncrementDecrementInput(props) {
  const [value, setValue] = useState(props.defaultValue || 0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <TextField
      label={props.label}
      variant={props.variant}
      value={value}
      type="number"
      InputProps={{
        endAdornment: (
          <>
            <IconButton style={{color: red}}  onClick={handleIncrement}>
                <Add />
            </IconButton>
          </>
        ),
        startAdornment: (
            <>
              <IconButton onClick={handleDecrement}>
              <Remove />
                </IconButton>
            </>
        ),
        inputProps: {
          min: props.min,
          max: props.max,
          step: props.step,
        },
      }}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default IncrementDecrementInput;
