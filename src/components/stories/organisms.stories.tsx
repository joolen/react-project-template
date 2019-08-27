import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SampleAppBar } from "../organisms/AppBar";

export const atoms_effects = storiesOf("Organisms", module)
    .addDecorator(withInfo({ inline: true }))
    .addDecorator(withKnobs)
    .add("PrimaryButton", () => (
        <SampleAppBar title={text("title", "sample")} />
    ))
