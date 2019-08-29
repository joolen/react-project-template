import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SampleAppBar } from "../organisms/AppBar";
import { CardItem } from "../organisms/CardItem";
import { MemoryRouter } from "react-router";
import CalculateSample from "../../containers/ReduxSampleContainer";
import { Provider } from "react-redux";
import configureStore from '../../configureStore'

const store = configureStore()

export const atoms_effects = storiesOf("Organisms", module)
    .addDecorator(withInfo())
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
    ))
    .add("Appbar", () => (
        <SampleAppBar title={text("title", "sample")} />
    ))
    .add("CardItem", () => (
        <CardItem
            image={text("image", "https://redux.js.org/img/redux.svg")}
            title={text("title", "Redux")}
            describe={text("describe", "A predictable state container for JavaScript apps.")}
            learnMoreUrl={text("learn more url", "https://redux.js.org/")}
            route="dummy"
        />
    ))
    .add("calculationArea", () => (
        <Provider store={store}>
            <CalculateSample taxRate={8} />
        </Provider>
    ))