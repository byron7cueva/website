import React from 'react'

import { SkillsSection } from './style'
import { LanguagesChart } from '../../components/LanguagesChart'
import { FrontendChart } from '../../components/FrontendChart'

export const Skills = () => (
  <SkillsSection>
    <h2>Habilidades</h2>
    <LanguagesChart />
    <FrontendChart />
  </SkillsSection>
)
