import {Autocomplete, TextField} from "@mui/material";

const MyAutocomplete = () => {

    const top100Films = ["AK-Movie-1", "AK-Movie-2"]

    return (<Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{width: 300}}
        renderInput={(params) => <TextField {...params} label="Movie"/>}
    />)
}


export default MyAutocomplete