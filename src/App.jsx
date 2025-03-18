import { Background } from "./components/Background"
import { MainComponents } from "./components/MainComponent"

function App() {
  return (
    <>
      <main className="flex items-center justify-center w-screen min-h-screen">
        <Background />
        <MainComponents />
      </main>
    </>
  )
}

export default App
