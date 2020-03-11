import styled from 'styled-components'

export const ExperienceContainer = styled.article`
  margin: 5.5em 0 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5em;
  .experience__position {
    grid-column: 1 / 2;
  }
  .experience__organization {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid var(--color-gray-2);
    padding-left: 0.5em;

    figure img {
      width: 4em;
    }
  }

  .experience__photo {
    grid-column: 1 / 3;
    justify-self: center;
  }

  .expereience__description {
    grid-column: 1 / 3;
    line-height: 2em;
  }
`
