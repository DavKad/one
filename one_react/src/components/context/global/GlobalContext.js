import {makeStyles} from '@material-ui/core';
import {createContext} from 'react'

export const alert = {
    type: 'success',
    message: 'You get properly context.'
}

export const margins = makeStyles((theme) => ({
    componentMargin: {
        margin: theme.spacing(1),
    }
}))

const GlobalContext = createContext({});

export default GlobalContext;