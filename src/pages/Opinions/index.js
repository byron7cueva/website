import React, { useEffect } from 'react'

import { OpinionsSection } from './style'
import { Opinion } from '../../components/Opinion'
import { useOpinionNavigation } from '../../hooks/useOpinionNavigation'
import { useSpeech } from '../../hooks/useSpeech'

import photoImage1 from '../../assets/img/all/soniaBossano.jpg'
import photoImage2 from '../../assets/img/all/ernestoKruger.jpg'

export const Opinions = () => {
  const opinions = [
    {
      message: 'Ha sido un gusto para nosotros ser testigos que todas las metas planeadas fueron cumplidas a cabalidad y con mucha responsabilidad; el resultado obtenido sobre el GIS ha sido todo satisfactorio para la institución y para unos servidores quienes te agradecen profundamente el trabajo y el compromiso que has demostrado',
      writer: 'Lic. Sonia Bossano',
      position: 'Responsable Desarrollo de Software TIC GADI',
      photo: photoImage1,
      link: 'https://media-exp1.licdn.com/media-proxy/ext?w=744&h=1024&f=n&hash=DFh22kFV86h0Iv0QtNpabARCMFw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3DgK5LYerCpuQweeisclAIzK_L6FmOzD5a1I9i9KYl12pe0IY24ZxUBbFI8lWxI'
    },
    {
      message: 'Mi reconocimiento a tu participación, entusiasmo, solidaridad y colaboración desinteresada que demostrarte al unirte en el proyecto Reconstruye Ecuador realizado por un TECHO para mi país, a través del levantamiento de la plataforma de donación en beneficio de las víctimas del terremoto del pasado mes de abril”.',
      writer: 'Ing. Ernesto Kruger',
      position: 'CEO Kruger Corporation',
      photo: photoImage2,
      link: 'https://media-exp1.licdn.com/dms/image/C562DAQHmB-wIGNXkfg/profile-treasury-image-shrink_1280_1280/0?e=1584115200&v=beta&t=P0nZVnk__cPhBUBL6lZe_WFQNeQczuiX8xJ7oV7wd9Q'
    }
  ]
  const [opinion, index, next, prev, toIndex] = useOpinionNavigation(opinions)
  const [handleSpeech, stopSpeech] = useSpeech()

  useEffect(() => {
    stopSpeech()
  }, [index])

  const handleClickSpeech = () => {
    handleSpeech(opinion.message)
  }
  return (
    <OpinionsSection className='container-page'>
      <h2>Que dicen de mi trabajo</h2>
      <Opinion {...opinion} onSpeech={handleClickSpeech} />
      <div className='opinions__navigation'>
        <button className='btn-icon' onClick={prev}>
          <i className='icon-arrow_left' />
        </button>
        {
          Object.keys(opinions).map(i => (
            <button key={i} className='btn-icon' onClick={() => toIndex(i)}>
              <i className={index === parseInt(i) ? 'icon-circle-slelected' : 'icon-circle-empty'} />
            </button>
          ))
        }
        <button className='btn-icon' onClick={next}>
          <i className='icon-arrow_right' />
        </button>
      </div>
    </OpinionsSection>
  )
}
