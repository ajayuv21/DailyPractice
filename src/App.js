
function App() {
  let msg = 'awsome';
  return (<div><div className='myHeader'>
    <h1>this is my header</h1></div>
    <p className="para">this is first {msg} app component</p>
    name:<input className="box" type="text" placeholder="enter name"></input>
    <button type="submit" className="btn">submit</button>
  </div>);
}
export default App;