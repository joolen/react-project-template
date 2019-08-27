import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import { WelcomeTemplate } from "../templates/WelcomeTemplate";
import { CardItemprops } from "../organisms/CardItem";

const dummyCard: CardItemprops[] = [
    {
        image: "https://redux.js.org/img/redux.svg",
        title: "Redux Example",
        describe: "A predictable state container for JavaScript apps.",
        learnMoreUrl: "https://redux.js.org/"
    },
    {
        image: "https://raw.githubusercontent.com/redux-saga/redux-saga/master/logo/0800/Redux-Saga-Logo.png",
        title: "Redux-Saga Example",
        describe: "redux-saga is a library that aims to make application side effects",
        learnMoreUrl: "https://redux-saga.js.org/"
    }
]

export const atoms_effects = storiesOf("Templates", module)
    .addDecorator(withInfo())
    .addDecorator(withKnobs)
    .add("Welcome", () => (
        <WelcomeTemplate cards={dummyCard} />
    ))