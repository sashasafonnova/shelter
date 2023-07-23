const App: React.FC = () => {

   const TestComponent = () => {
      return (
         <h1 style={ {color: 'red'} }>Привет, мир!</h1>
      )
   }

   return (
      <TestComponent />
 );
}

export default App;