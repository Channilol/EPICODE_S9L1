// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ImageClass from './components/Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label='Bottone TOP' />
        <ImageClass url='https://s3.ap-south-1.amazonaws.com/curiousjr-public/web/banner_what_is_coding_1639724390969.jpg' />
        <Button label='Bottone BOT' />
      </header>
    </div>
  );
}

export default App;
