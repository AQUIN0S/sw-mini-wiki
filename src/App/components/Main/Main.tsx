import React, { Component } from 'react';
import StringFun from './utility/StringFun';
import './Main.css';

interface MainProps {
    categoryData: {[key: string]: string | string[]}[]
}

class Main extends Component<MainProps, {}> {
    render() {
        if (this.props.categoryData) {
            return (
                <main>
                    <div id="grid">
                        {this.props.categoryData.map((item, index) => {
                            const data = Object.entries(item);
                            return (
                                <div className="gridItem" key={`DP${index}`}>
                                    {data.map((dataPoint, index) => {
                                        if (dataPoint[0] === "created" || dataPoint[0] === "edited" || !(dataPoint[1].length)) {
                                            return;
                                        }
                                        console.log(dataPoint);
                                        return (
                                            <p key={`P${index}`}>
                                                {`${StringFun.capitalize(dataPoint[0])}: ${dataPoint[1]}`}
                                            </p>
                                        );
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </main>
            );
        } else {
            return (
                <main></main>
            );
        }
    }
}

export default Main;
