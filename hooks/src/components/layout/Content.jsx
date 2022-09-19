import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/useState" element={<UseState />} />
            <Route exact path="/useEffect" element={<UseEffect />} />
            <Route exact path="/useRef" element={<UseRef />} />
            <Route exact path="/useCallback" element={<UseCallback />} />
            <Route exact path="/useMemo" element={<UseMemo />} />
            <Route exact path="/useContext" element={<UseContext />} />
            <Route exact path="/useReducer" element={<UseReducer />} />
            <Route exact path="/useCustom" element={<UseCustom />} />
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content