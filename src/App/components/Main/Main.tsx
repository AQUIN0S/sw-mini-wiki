import React, { Component } from 'react';

interface MainProps {
    categoryData: {[key: string]: string}[]
}

class Main extends Component<MainProps, {}> {
    render() {
        if (this.props.categoryData) {
            return (
                <main>
                    <div id="grid">
                        {this.props.categoryData.map(item => {
                            const firstDataPoint = Object.keys(item)[0];
                            return (
                                <div className="gridItem" key={item[firstDataPoint]}>
                                    {`${firstDataPoint}: ${item[firstDataPoint]}`}
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
