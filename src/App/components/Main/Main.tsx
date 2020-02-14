import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main>
                <div id="loading">
                    <h2>Loading...</h2>
                    <div id="loadingBar">
                        <div id="loadingProgress"></div>
                    </div>
                </div>
                <div id="grid"></div>
            </main>
        );
    }
}

export default Main;
