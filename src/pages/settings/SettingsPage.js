import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BodyWrapper from '../../components/Navigator/BodyWrapper'
import Navigate from '../../components/Navigator/Navigate'
import SettingsList from './SettingsList'

export default function SettingsPage() {

    const { path } = useRouteMatch();
    return (
        <>
            <Navigate title='Settings' />
            <BodyWrapper>
                <Switch>
                    <Route exact path={path}>
                         <SettingsList/> 
                    </Route>
                    

                </Switch>

            </BodyWrapper>
        </>
    )
}
