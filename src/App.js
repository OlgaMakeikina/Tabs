import {useState} from 'react';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Tabs from './Tabs/Tabs';
import './App.css';

function App() {  
     const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
<Tabs setActiveTab = {setActiveTab}/>
{activeTab === 0 && <TabInfoOne/>}
{activeTab === 1 && <TabInfoTwo/>}
{activeTab === 2 && <TabInfoThree/>}
    </div>
  );
}

export default App;
