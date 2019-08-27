import React from 'react';
import { WelcomeTemplate } from '../templates/WelcomeTemplate'
import { CardItemprops } from '../organisms/CardItem';

const menuContents: CardItemprops[] = [
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
export const WelcomePage: React.FC = () => {
    return (
        <div>
            <WelcomeTemplate cards={menuContents} />
        </div>
    )
}