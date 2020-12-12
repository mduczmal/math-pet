import { styled } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';

export const SuccessMessage = styled(Paper)({
    background: 'linear-gradient(45deg, #FF6B8B 30%, #EE50EE 90%)',
    color: 'white',
    width: '100%',
});

export const FailureMessage = styled(Paper)({
    background: 'linear-gradient(45deg, #22FFDD 30%,#AACCFF 90%)',
    color: 'white',
    width: '100%',
});

