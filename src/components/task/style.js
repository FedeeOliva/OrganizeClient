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

		& > .buttons {
			display: flex;
		}
	}

`;

export const OptionsButtons = styled.div`
	display: none;
	flex-direction: column;
	position: absolute;
	right: 5px;
	top: 5px;
`;

export const BtnOption = styled.button`
	background: none;
	border: none;	
`;

export const SpanTextTask = styled.span`
	word-wrap: break-word;
`;

export const TextArea = styled.textarea`
	border: none;
	width: 100%;
	height: auto;
	resize: none;
`
