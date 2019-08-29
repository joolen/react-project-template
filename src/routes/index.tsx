import React from 'react'
import { Route, Switch } from 'react-router'
import { SampleAppBar } from '../components/organisms/AppBar'
import { WelcomePage } from '../components/pages/WelcomePage'
import { SampleReduxPage } from '../components/pages/Samplepage';
import { ReduxSagaSampleComponent } from '../components/pages/SampleSagaPage';

const routes = (
    <div>
        <SampleAppBar title="Sample React Template" />
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/redux-sample" component={SampleReduxPage} />
            <Route exact path="/redux-saga-sample" component={ReduxSagaSampleComponent} />
        </Switch>
    </div>
)
export default routes