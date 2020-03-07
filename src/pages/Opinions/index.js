import React from 'react'

import { OpinionsSection } from './style'
import { Opinion } from '../../components/Opinion'

import photoImage1 from '../../assets/img/all/soniaBossano.jpg'

export const Opinions = () => (
  <OpinionsSection>
    <h2>Que dicen de mi trabajo</h2>
    <div>
      <Opinion
        message='Ha sido un gusto para nosotros ser testigos que todas las metas planeadas fueron cumplidas a cabalidad y con mucha responsabilidad; el resultado obtenido sobre el GIS ha sido todo satisfactorio para la institución y para unos servidores quienes te agradecen profundamente el trabajo y el compromiso que has demostrado'
        writer='Lic. Sonia Bossano'
        position='Responsable Desarrollo de Software TIC GADI'
        photo={photoImage1}
      />
      <Opinion
        message='Ha sido un gusto para nosotros ser testigos que todas las metas planeadas fueron cumplidas a cabalidad y con mucha responsabilidad; el resultado obtenido sobre el GIS ha sido todo satisfactorio para la institución y para unos servidores quienes te agradecen profundamente el trabajo y el compromiso que has demostrado'
        writer='Lic. Sonia Bossano'
        position='Responsable Desarrollo de Software TIC GADI'
        photo={photoImage1}
      />
    </div>
  </OpinionsSection>
)
