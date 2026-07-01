import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

//state = a built-in object that allows you to store and manage data in a component.

// components in react are reusable pieces of code that represent a part of the user interface.
// They can be functional components or class components, but functional components are more commonly used in modern React development.
// Components allow you to break down your UI into smaller, manageable pieces, making it easier to develop and maintain your application.

// functional component - stateless component
// Class component - stateful component

// components are created in the src file of the react app
// components must start with a capital letter(PascalCase)

// component name must be same as file name

function App() {
  let user = 'saran'; // sending this name to header
  let user2 = 'kumer'; // ssending this to footer
  return (
    <>
      <div className="App">
        <Header user={user} />
        <Content />
        <Footer user={user2} />

        <div></div>
      </div>
    </>
  );
}

export default App;
