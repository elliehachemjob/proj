import useMediaQuery from '@mui/material/useMediaQuery';


export const useMediaQuerySize = (screenSize) => {

 let value = useMediaQuery(screenSize);

 return value

}

