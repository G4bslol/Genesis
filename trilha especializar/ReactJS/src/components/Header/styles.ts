import styled from 'styled-components';

export const NavBar = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;

    top: 0;

    width: 100vw;
    height: 90px;

    background-color: #25f166;

	.link {
		text-decoration: none;

		span {
			color: black;
			font-weight: 700;
		}
	}
`;
