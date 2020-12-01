import styled from '@emotion/styled';

export const List = styled.article`
	background: #EEE;
	border-radius: 10px;
	margin: 10px;
	width: 300px;
	min-width: 300px;
	padding: 10px;
	height: max-content;
	max-height: 90%;
	display: flex;
	flex-direction: column;

	& > ul{
		list-style: none;
	}
`;

export const ListHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > h6{
		margin: 0;
		font-weight: bold;
	}

	& > button{
		background: none;
		border: none;
	}
`;

export const BtnAddTask = styled.button`
	width: 100%;
	height: 30px;
	border: none;
`;