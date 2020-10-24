import styled from '@emotion/styled';

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 ${ ({theme}) => theme.padding.s};
	width: 100%;

	${ ({theme}) => theme.breakpoint.tablet}{
		padding: 0 ${ ({theme}) => theme.padding.m};
	}

	${ ({theme}) => theme.breakpoint.desktop}{
		padding: 0 ${ ({theme}) => theme.padding.l};
		max-width: ${ ({theme}) => theme.maxWidth};
	}


`;