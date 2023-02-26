import React, { useState } from 'react'
import{AllCategory,Dinner,Drink,Dessert,Lunch} from './index'
import { Tabs,TabList,TabPanel,Tab } from 'react-tabs'
const Popular = () => {
  const [activeTab,setActiveTab] = useState(0);

  const handleTabClick =(event) =>{
    setActiveTab(event);
  }
  return (
    <div className='flex px-12 py-12'>
      <Tabs onSelect={handleTabClick} selectedIndex={activeTab}>
        <TabList className="w-full flex gap-[20px]  justify-center" >
          <Tab className="h-[40px]" selectedClassName='bg-red-600 h-[40px] rounded-md text-white cursor-pointer w-[120px] flex justify-center items-center mb-[50px]'>All Category</Tab>
          <Tab className="h-[40px]" selectedClassName='bg-red-600 h-[40px] rounded-md text-white cursor-pointer w-[120px] flex justify-center items-center mb-[50px]'>Dinner</Tab>
          <Tab className="h-[40px]" selectedClassName='bg-red-600 h-[40px] rounded-md text-white cursor-pointer w-[120px] flex justify-center items-center mb-[50px]'>Dessert</Tab>
          <Tab className="h-[40px]" selectedClassName='bg-red-600 h-[40px] rounded-md text-white cursor-pointer w-[120px] flex justify-center items-center mb-[50px]'>Lunch</Tab>
          <Tab className="h-[40px]" selectedClassName='bg-red-600 h-[40px] rounded-md text-white cursor-pointer w-[120px] flex justify-center items-center mb-[50px]'>Drinks</Tab>
        </TabList>
        <TabPanel>
          <AllCategory />
        </TabPanel>
        <TabPanel>
          <Dinner/>
        </TabPanel>
        <TabPanel>
          <Dessert/>
        </TabPanel>
        <TabPanel>
          <Lunch/>
        </TabPanel>
        <TabPanel>
          <Drink/>
        </TabPanel>
      </Tabs>
       
       
       
       
       
    </div>
  )
}

export default Popular