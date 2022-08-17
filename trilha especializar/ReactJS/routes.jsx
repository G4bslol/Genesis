import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './src/pages/Home'
import {Animations} from './src/pages/Animations'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/animations" element={<Animations />} />
			</Routes>
		</BrowserRouter>
	)
}