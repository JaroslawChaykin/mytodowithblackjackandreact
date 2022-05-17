import TodoList from 'components/todoList/TodoList';
import BgImage from 'components/bg-image/BgImage';
import TodoCreatedForm from 'components/todoCreatedForm/TodoCreatedForm';
import Header from 'components/Header/Header';
import 'App.css';
import FooterFilter from 'components/footerFilter/FooterFilter';

function App() {

    return (
      <BgImage>
          <div className="todoEntries">
              <Header/>
              <TodoCreatedForm/>
              <TodoList/>
              <FooterFilter/>
          </div>
      </BgImage>
    );
}

export default App;
