import styled from 'styled-components/macro';
import { Row as ShowRow, CardContainer } from '../../show/styles/show';

export const Container = styled.div``;
export const Row = styled(ShowRow)`
  display: grid;
  grid-template-columns: repeat(6, 17.75rem);
  grid-auto-rows: minmax(auto,auto);
  padding: 8rem 3rem;
  grid-gap: 0.5rem;
  place-content: center;
  margin-top: 0;

  ${CardContainer} {
    margin-bottom: 4rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 14rem);
    ${CardContainer} {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 10.5rem);
    padding: 5rem 2rem;
    ${CardContainer} {
      margin-bottom: 0;
    }
  }
`;
export const NoMatch = styled.div`
	margin: 10rem auto;
	max-width: 30rem;
	line-height: 1.5;
	p {
		margin-bottom: 0.5rem;
	}
	@media (max-width: 600px) {
		max-width: 15rem;
		font-size: 0.8rem;
	}
`;
