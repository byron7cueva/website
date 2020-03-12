import React from 'react'

import { SkillsSection } from './style'
import { LanguagesChart } from '../../components/LanguagesChart'
import { FrontendChart } from '../../components/FrontendChart'

const data = {
  programingLanguages: {
    2014: [
      { id: 'JavaScript', value: 2 },
      { id: 'Node.js', value: 1 },
      { id: 'Java', value: 2 },
      { id: 'PHP', value: 4 }
    ],
    2015: [
      { id: 'JavaScript', value: 3 },
      { id: 'Node.js', value: 2 },
      { id: 'Java', value: 2 },
      { id: 'PHP', value: 3 }
    ],
    2016: [
      { id: 'JavaScript', value: 3 },
      { id: 'Node.js', value: 3 },
      { id: 'Java', value: 3 },
      { id: 'PHP', value: 2 }
    ],
    2017: [
      { id: 'JavaScript', value: 4 },
      { id: 'Node.js', value: 4 },
      { id: 'Java', value: 4 },
      { id: 'PHP', value: 1 }
    ],
    2018: [
      { id: 'JavaScript', value: 4 },
      { id: 'Node.js', value: 4 },
      { id: 'Java', value: 3 }
    ],
    2019: [
      { id: 'JavaScript', value: 4 },
      { id: 'Node.js', value: 4 },
      { id: 'Java', value: 3 },
      { id: 'Kotlin', value: 1 }
    ],
    2020: [
      { id: 'JavaScript', value: 4 },
      { id: 'Node.js', value: 4 },
      { id: 'Java', value: 3 },
      { id: 'Kotlin', value: 2 }
    ]
  }
}

export const Skills = () => (
  <SkillsSection className='container-page'>
    <h2 className='dark'>Habilidades</h2>
    <LanguagesChart data={data.programingLanguages['2020']} height={150} />
    <FrontendChart height={350} />
  </SkillsSection>
)
