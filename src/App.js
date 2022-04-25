import TodoList from './components/todoList/TodoList';
import BgImage from './components/bg-image/BgImage';
import TodoCreatedForm from './components/todoCreatedForm/TodoCreatedForm';
import Header from './components/Header/Header';
import FooterFilter from './components/footerFilter/FooterFilter';
import './App.css';

function App() {

    return (
      <div>
          <BgImage>
              <div className="todoBox">
                  <div className="todoEntries">
                      <Header/>
                      <TodoCreatedForm/>
                      <TodoList/>
                  </div>
              </div>
          </BgImage>
      </div>
    );
}

export default App;
