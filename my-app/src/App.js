import css from './App.module.css';
// import NavBarSimple from './components/NavBarSimple';
// import NavBarForm from './components/NavBarForm';
// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from './components/MethodsAsPropsParent';

import NavBarForm from './components/NavBarForm';

// function App() {
//   return (
//     <div className={css.App}>
//       <NavBarSimple />
//     </div>
//   );
// }

function App() {
  return (
    <div className={css.NavBar}>
      <NavBarForm />
    </div>
  );
}

export default App;