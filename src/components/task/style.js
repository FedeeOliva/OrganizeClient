import styled from '@emotion/styled';

export const Task = styled.li`
	background: white;
	padding: 10px 20px 10px 10px;
	min-height: 50px;
	border-radius: 10px;
	margin-bottom: 15px;
	font-size: 0.8em;
	position: relative;

	&:hover{
		cursor: move;
		background: #f4f5f7;

		& > button {
			display: inline-block;
		}
	}

`;

export const BtnEdit = styled.button`
	background: none;
	border: none;
	position: absolute;
	right: 5px;
	top: 5px;
	display: none;
`;