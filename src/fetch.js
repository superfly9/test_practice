import React, {useState, useReducer, useEffect } from 'react'

const initialState = {
  error: null,
  greeting: null,
}

function greetingReducer(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        greeting: action.greeting,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        greeting: null,
      }
    }
    default: {
      return state
    }
  }
}

export default function Fetch({url = '/greeting'}) {
  const [{error, greeting}, dispatch] = useReducer(
    greetingReducer,
    initialState,
  )
  const [buttonClicked, setButtonClicked] = useState(false);
  
  useEffect(()=>{
    //cleanup
    //Unmounts React trees that were mounted with render.
    
    //Please note that this is done automatically if the testing framework you're using supports the afterEach global and 
    // it is injected to your testing environment (like mocha, Jest, and Jasmine). If not, you will need to do manual cleanups after each test.
    // test 실행시마다 effect의 cleanUp 함수도 실행됨 => 자동으로 test API의 cleanup이 실행됨을 알 수 있다. testAPI의 unmount 굳이 실행해줄 필요X
      return () => console.log('unmount')
  })

  const fetchGreeting = async url => {
      try {
          const response = await fetch(url);
          const result = await response.json();
              const {data} = result;
              const {greeting} = data
              dispatch({type: 'SUCCESS', greeting})
              setButtonClicked(true)
      } catch (error) {
          dispatch({type: 'ERROR', error})
      }
  }

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'

  return (
    <div>
      <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  )
}