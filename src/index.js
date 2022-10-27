import * as React from "react";
import * as ReactDOM from "react-dom";

// import MySection from "./MySection";
// import MyButton from "./MyButton";
import MyComponent from "./MyComponent";
import WithoutFragments from "./WithoutFragments";
import WithFragments from "./WithFragments";

class MyComponent1 extends React.Component {
  render() {
    return (
      <section>
        <h1> My Component </h1>
        <p> This is the content in my component... </p>
      </section>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <WithoutFragments />
    <WithFragments />
  </div>
);

// root.render(
//   <MySection>
//     <MyButton>My Button Text</MyButton>
//     <MyComponent1 />
//   </MySection>
// );

// root.render(
//   <MyComponent>
//     <MyComponent.First />
//     <MyComponent.Second />
//   </MyComponent>
// );