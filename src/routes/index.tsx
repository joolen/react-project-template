import React from 'react'
import { Route, Switch } from 'react-router'
import { SampleAppBar } from '../components/organisms/AppBar'
import { WelcomePage } from '../components/pages/WelcomePage'
import { ReduxSampleComponent } from '../components/pages/Samplepage';

const routes = (
    <div>
        <SampleAppBar title="Sample React Template" />
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/redux-sample" component={ReduxSampleComponent} />
        </Switch>
    </div>
)
export default routes