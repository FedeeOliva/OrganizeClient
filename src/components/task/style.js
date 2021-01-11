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

export const SpanTextTask = styled.span`
	word-wrap: break-word;
`;

export const TextArea = styled.textarea`
	border: none;
	width: 100%;
	height: auto;
	resize: none;
`

export const PopoverEdit = styled.div`
	background: #EEE;
	border-radius: 10px;
	border: 1px solid rgba(0,0,0,0.3);
	display: flex;
	flex-direction: column;
	min-width: 100px;


	& > button{
		border: none;
		background: none;
		color: #333;
		width: 100%;
		height: 30px;
	}
`;