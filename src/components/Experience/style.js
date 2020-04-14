import styled from 'styled-components'

export const ExperienceContainer = styled.article`
  display: grid;
  /* margin: 6em 0 2em; */
  margin: 6em 0 16vh;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5em;
  .experience__position {
    grid-column: 1 / 2;
  }
  .experience__organization {
    display: flex;
    grid-column: 2 / 3;
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
  }
`
