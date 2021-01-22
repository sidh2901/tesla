import Header from './components/Header'
import './App.css';
import Item from './components/Item'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title='Lowest Cost Solar panels in America'
          desc='Money-back guarantee'
          desc-Link=''
          backgroundImg={SolarPanels}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
          <Item
          title='ModelS'
          desc='Starting at $69,420'
          desc-Link=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
          <Item
          title='Model 3'
          desc='Order Online for Touchless Delivery'
          desc-Link=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
          <Item
          title='Model X'
          desc='Order Online for Touchless Delivery'
          desc-Link=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model y'
          desc='Order Online for Touchless Delivery'
          desc-Link=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Solar Roof'
          desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          desc-Link=''
          backgroundImg={SolarRoof}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Accessories'
          desc='You Need'
          desc-Link=''
          backgroundImg={Accessories}
          leftBtnTxt='SHOP NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
