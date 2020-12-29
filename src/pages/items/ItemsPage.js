import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BodyWrapper from '../../components/Navigator/BodyWrapper'
import Navigate from '../../components/Navigator/Navigate'
import ItemForm from './productItems/ItemForm'
import ItemsFab from './ItemsFab'
import ItemsTabs from './ItemsTab'
import RawMaterialForm from './materials/RawMaterialForm';
import PackagingMaterialForm from './materials/PackagingMaterialForm';

export default function ItemsPage() {

    const { path } = useRouteMatch();
    return (
        <>
            <Navigate title='Items' />
            <BodyWrapper>
                <Switch>
                    <Route exact path={path}>
                        <ItemsTabs>
                            <ItemsFab/>
                        </ItemsTabs>
                    </Route>
                    <Route path={`${path}/additem`}>
                        <ItemForm/>
                    </Route>
                    <Route path={`${path}/addrawmaterial`}>
                        <RawMaterialForm/>
                    </Route>
                    <Route path={`${path}/addpackagingmaterial`}>
                        <PackagingMaterialForm/>
                    </Route>

                </Switch>

            </BodyWrapper>
        </>
    )
}
