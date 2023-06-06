import css from './App.module.css';
// import NavBarSimple from './components/NavBarSimple';
// import NavBarForm from './components/NavBarForm';
// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from './components/MethodsAsPropsParent';

// import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

// import RenderingLists from './components/RenderingLists';
// // function App() {
// //   return (
// //     <div className={css.App}>
// //       <NavBarSimple />
// //     </div>
// //   );
// // }

function App() {
  return (
    <div className={css.NavBar}>
      <Content />
    </div>
  );
}

export default App;