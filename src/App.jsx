import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const data = imageData();
  return (
    <div className='Home'>
      <h1 className='head'>Kalvium Gallery</h1>
      <div className='container-image'>
        {data.map(item => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} className = 'image' />
        ))}
      </div>
    </div>
  )
}

export default App;
