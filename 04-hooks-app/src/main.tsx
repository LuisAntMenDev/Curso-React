import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { InstagramApp } from './07-useOptimistic/InstagramApp'
import { Toaster } from 'sonner'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get-user.action'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { MemoHook } from './06-memos/MemoHook'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagramApp /> */}
    {/* <Suspense fallback={(
      <div className='bg-gradient'>Cargando...</div>
    )}>
      <ClientInformation getUser={getUserAction(200)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
