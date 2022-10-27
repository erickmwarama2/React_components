import * as React from "react";

const enabled = true;
const text = 'A Button';
const placeholder = 'input value...';
const size = 50;

const array = ["First", "Second", "Third"];

const object = {
    first: 1,
    second: 2,
    third: 3
};

class First extends React.Component {

    render() {
        return (
            <section>
                <h1>Array</h1>
                <ul>
                    {array.map((i) => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
                <hr/>
                <ul>
                    {Object.keys(object).map((i) => (
                        <li key={i}><strong>{i}: </strong>{object[i]}</li>
                    ))}
                </ul>
                <p>First component...</p>
                <p><button disabled={!enabled}>{text}</button></p>
                <p><input placeholder={placeholder} size={size} /></p>
            </section>
        );
    }
}

class Second extends React.Component {
    render() {
        return (
            <p>Second...</p>
        );
    }
}

class MyComponent extends React.Component {
    render() {
        return (
            <section>{this.props.children}</section>
        );
    }
}

MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;