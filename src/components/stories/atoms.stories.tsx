import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";


export const atoms_effects = storiesOf("Atoms/buttons", module)
    .addDecorator(withInfo({ inline: true }))
    .addDecorator(withKnobs)
    .add("PrimaryButton", () => (
        <PrimaryButton displayText={text('display', "default")} />
    ))
    .add("SecondaryButton", () => (
        <SecondaryButton displayText={text('display', "default")} />
    ), { info: { text: "red" } })
