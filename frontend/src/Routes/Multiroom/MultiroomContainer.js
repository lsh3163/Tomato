import React, { useLayoutEffect } from 'react'
import MultiroomPresenter from './MultiroomPresenter';
import initConference from '../../script/Conference';
import initTimer from '../../script/Timer';
import initJavis from '../../script/Report'

export default () => {
   
    useLayoutEffect(() => {
        initConference();
        initTimer();
        initJavis();
    }, []);
    
    
    
    return(
        <MultiroomPresenter />
    )
}
