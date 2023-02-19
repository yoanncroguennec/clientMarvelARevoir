import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StylesTextFieldForm = styled(TextField)({
  '& label.Mui-focused': {
  },
  '& .MuiInput-underline:after': {
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});
