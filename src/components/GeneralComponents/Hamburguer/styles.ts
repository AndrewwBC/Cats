import styled, { keyframes } from 'styled-components';

const animaBg = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const BurgContent = styled.div`  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(-45deg, #555,
        , #fb1, #202020);
	background-size: 400% 400%;
    animation: ${animaBg} 10s  infinite;
`;




