import React from 'react';
import Pages from "./components/pages/Pages";
import {Provider} from "react-redux";
import store from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <Pages/>
        </Provider>
    );
};

export default App;