import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
		
		header {
				margin: 84px 0 24px;
				width: 50%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				div {
						display: flex;
						align-items: center;
				} 
				
				img {
						width: 60px;
						height: 60px;
						border-radius: 30px;
						margin-left: 7px;
				}

		}    
		
		input {
        width: 50%;
        height: 30px;
        padding: 24px;

        background: #e6e6e6;
        border-radius: 5px;
        border: none;

        font-size: 16px;
    }

    button {

        width: 50%;
        padding: 24px;

        font-weight: 700;

        background: #25f166;
        color: rgb(0, 0, 0);
        border-radius: 5px;
        margin: 12px 0 84px;
        border: none;

        cursor: pointer;
        font-size: 16px;
    }
`