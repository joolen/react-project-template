import React from 'react'
import { Route, Switch } from 'react-router'
import { SampleAppBar } from '../components/organisms/AppBar'
import { WelcomePage } from '../components/pages/WelcomePage'

const routes = (
    <div>
        <SampleAppBar title="Sample React Template" />
        <Switch>
            <Route exact path="/" component={WelcomePage} />
        </Switch>
    </div>
)
export default routes