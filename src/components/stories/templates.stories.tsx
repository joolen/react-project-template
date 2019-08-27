import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import { WelcomeTemplate } from "../templates/WelcomeTemplate";
import { CardItemprops } from "../organisms/CardItem";
import { MemoryRouter } from "react-router";

const dummyCard: CardItemprops[] = [
    {
        image: "https://redux.js.org/img/redux.svg",
        title: "Redux Example",
        describe: "A predictable state container for JavaScript apps.",
        learnMoreUrl: "https://redux.js.org/",
        route: "redux-example"
    },
    {
        image: "https://raw.githubusercontent.com/redux-saga/redux-saga/master/logo/0800/Redux-Saga-Logo.png",
        title: "Redux-Saga Example",
        describe: "redux-saga is a library that aims to make application side effects",
        learnMoreUrl: "https://redux-saga.js.org/",
        route: "redux-saga-example"
    }
]

export const atoms_effects = storiesOf("Templates", module)
    .addDecorator(withInfo())
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/', 'posts']}>{story()}</MemoryRouter>
    ))
    .add("Welcome", () => (
        <WelcomeTemplate cards={dummyCard} />
    ))