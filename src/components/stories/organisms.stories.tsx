import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SampleAppBar } from "../organisms/AppBar";
import { CardItem } from "../organisms/CardItem";

export const atoms_effects = storiesOf("Organisms", module)
    .addDecorator(withInfo())
    .addDecorator(withKnobs)
    .add("Appbar", () => (
        <SampleAppBar title={text("title", "sample")} />
    ))
    .add("CardItem", () => (
        <CardItem
            image={text("image", "https://redux.js.org/img/redux.svg")}
            title={text("title", "Redux")}
            describe={text("describe", "A predictable state container for JavaScript apps.")}
            learnMoreUrl={text("learn more url", "https://redux.js.org/")}
        />
    ))
