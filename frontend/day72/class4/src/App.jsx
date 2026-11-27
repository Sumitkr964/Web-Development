import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {
  const user1={
    name:'A',
    gender:'male'
  }
  const user2={
    name:'B',
    gender:'female'
  }

  function btnClicked(a) {
    console.log('Button is Clicked!!!');
  }

  function mouseEnter(a) {
    console.log('Mouse entered!!!');
  }

  return (
    <div>
      <Navbar title='iphone' color='red' links={['home','iphone','ipad','mac','about us']} />
      <Navbar title='sheryians' color='green' links={['home','courses','bootcamp','contact']} />
      <Navbar title='aktu' color='blue' links={['ERP','exam','circular','contact','about us']} />


      {user2.gender == 'male'? <Men/> : <Women/> }
      {user1.gender == 'male'? <Men/> : <Women/> }


      <button
        onClick={function(){
          btnClicked()
        }}
        className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2 mt-7 '
      >Click Me
      </button>

      <button
        onMouseEnter={function(){
          mouseEnter()
        }}
        className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2 mt-7 '
      >Enter Mouse
      </button>

    </div>
  )
}

export default App