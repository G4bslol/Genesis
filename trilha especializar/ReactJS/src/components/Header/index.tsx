import { Link } from "react-router-dom";
import { NavBar } from "./styles";

export function Header() {
	return (
		<NavBar>
			<div>
				<Link to="/" className="link"><span>Home</span></Link>
			</div>
			<div>
				<Link to="/animations" className="link"><span>Animações</span></Link>
			</div>
		</NavBar>
	)
}