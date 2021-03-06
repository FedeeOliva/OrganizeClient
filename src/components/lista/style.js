import styled from '@emotion/styled';

export const Wrapper = styled.div`	
	height: 100%;
	
`;

export const List = styled.article`
	background: #EEE;
	border-radius: 10px;
	margin: 10px;
	width: 300px;
	min-width: 300px;
	padding: 10px;
	max-height: 90%;
	display: flex;
	flex-direction: column;

	& > ul{
		list-style: none;
		flex: 1 1 auto;
		overflow-y: auto;
	}
	
`;


export const ListHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 0 0 auto;
	padding: 0 0 10px 0;

	& > h6{
		margin: 0;
		font-weight: bold;
	}

	& > button{
		background: none;
		border: none;
	}
`;
export const BtnDelete = styled.button`
	&:hover{
		color: red;
	}
`;

export const BtnAddTask = styled.button`
	flex: 0 0 auto;
	width: 100%;
	height: 30px;
	border: none;
`;

export const Input = styled.input`
	border: none;
	background: #EEE;
	transition: 0.3s;

	&:focus{
		padding-left: 5px;
		background: white;
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-size: 0.8em;
`;