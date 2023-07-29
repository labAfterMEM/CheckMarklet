import { GlobalHeader } from '~/components/header/header'
import { GlobalFooter } from '~/components/footer/footer'
import { Wrapper } from '~/app.styled'
// import { ContextWrapper } from '~/hooks/context/context'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '~/pages/home'

function App() {
  return (
    <>
    <BrowserRouter basename="/check-marklet">
      <GlobalHeader />
      <Wrapper>
        {/* <ContextWrapper> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Navigate to='/' replace />} />
          </Routes>
        {/* </ContextWrapper> */}
      </Wrapper>
      <GlobalFooter />
    </BrowserRouter>
    </>
  )
}

export default App
