import React from 'react'

import { SkillsSection } from './style'
import { LanguagesChart } from '../../components/LanguagesChart'
import { FrontendChart } from '../../components/FrontendChart'
import { DataTecnologyChart } from '../../components/DataTecnologyChart'

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
  },
  frontend: [
    {
      id: 'React.js',
      data: [
        { x: 2016, y: null },
        { x: 2017, y: null },
        { x: 2018, y: null },
        { x: 2019, y: 1, value: 2 },
        { x: 2020, y: 1, value: 3 }
      ]
    },
    {
      id: 'Vue.js',
      data: [
        { x: 2016, y: null },
        { x: 2017, y: null },
        { x: 2018, y: 1, value: 1 },
        { x: 2019, y: 2, value: 2 },
        { x: 2020, y: 2, value: 2 }
      ]
    },
    {
      id: 'Angular.js',
      data: [
        { x: 2016, y: 1, value: 3 },
        { x: 2017, y: 1, value: 4 },
        { x: 2018, y: 4, value: 4 },
        { x: 2019, y: null },
        { x: 2020, y: null }
      ]
    },
    {
      id: 'Angular',
      data: [
        { x: 2016, y: null },
        { x: 2017, y: null },
        { x: 2018, y: 2, value: 1 },
        { x: 2019, y: 3, value: 2 },
        { x: 2020, y: 3, value: 2 }
      ]
    }
  ],
  dataTecnology: [
    { id: 'GrahpQL', value: 2 },
    { id: 'Api Rest', value: 3 },
    { id: 'Postgresql', value: 3 },
    { id: 'PostGIS', value: 3 },
    { id: 'Mongo', value: 2 }
  ]
}

export const Skills = () => (
  <SkillsSection className='container-page'>
    <h2 className='dark'>Habilidades</h2>
    <LanguagesChart data={data.programingLanguages['2020']} height={180} />
    <FrontendChart data={data.frontend} height={350} width={700} />
    <DataTecnologyChart data={data.dataTecnology} height={250} width={400} />
  </SkillsSection>
)
