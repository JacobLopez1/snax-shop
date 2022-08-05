import React from 'react';
import Highlight from './Highlight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RedoIcon from '@mui/icons-material/Redo';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import TimerIcon from '@mui/icons-material/Timer';

const Highlights = () => {
    return (
        <div className='flex flex-wrap py-8 items-center justify-center'>
            <Highlight IconOne={LocalShippingIcon} IconTwo={MoneyOffIcon} text="Free Shipping"/>
            <Highlight IconOne={RedoIcon} IconTwo={LocalAtmIcon} text="Money Back"/>
            <Highlight IconOne={HeadsetMicIcon} IconTwo={TimerIcon} text="24/7 Support"/>
        </div>
    );
}

export default Highlights;
