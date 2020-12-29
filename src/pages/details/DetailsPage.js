import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BodyWrapper from '../../components/Navigator/BodyWrapper'
import Navigate from '../../components/Navigator/Navigate'
import DetailsList from './DetailsList'

export default function DetailsPage() {

    const { path } = useRouteMatch();
    return (
        <>
            <Navigate title='Item Details' />
            <BodyWrapper>
                <Switch>
                    <Route exact path={path}>
                         <DetailsList/> 
                    </Route>
                    

                </Switch>

            </BodyWrapper>
        </>
    )
}
