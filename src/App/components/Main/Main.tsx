import React, { Component } from 'react';

interface MainProps {
    categoryData: object[]
}

class Main extends Component<MainProps, {}> {
    render() {
        return (
            <main>
                <div id="grid"></div>
            </main>
        );
    }
}

export default Main;
