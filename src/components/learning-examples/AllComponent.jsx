import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import {FifthComponent} from './FourthComponent'

export default function AllModules() {
    return (
      <div className="App">
        My ToDo Application
  
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
      </div>
    );
  }