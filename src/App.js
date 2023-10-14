import React, { useState } from 'react'
import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MobileSidebar from './components/Sidebar/MobileSidebar';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const initialSelectedItems = new Array(24).fill(false);
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
 
  function addButtonClicked(itemId) {
    const updatedItems = [...selectedItems];
    updatedItems[itemId] = !updatedItems[itemId];
    setSelectedItems(updatedItems);
    if (updatedItems[itemId]) {
      setCartCount(cartCount + 1)
    }
    else {
      setCartCount(cartCount - 1)
    }
  }

  //sidebar clicked
  const handleSidebarClick = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar cartCount={cartCount} />
      <div className='app-container'>

        <div className='sidebar'>
          <Sidebar handleSidebarClick={handleSidebarClick} />
        </div>
        <div className='main-content'>
          <MobileSidebar handleSidebarClick={handleSidebarClick} />
          <Main selectedItems={selectedItems} addButtonClicked={addButtonClicked} />
        </div>
      </div>

    </div>
  );
}

export default App;
