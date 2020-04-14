import React from 'react'
import ReactDOM from 'react-dom'

import { ExpereiencesSection } from './style'
import { Experience } from '../../components/Experience'

import logoKruger from '../../assets/img/all/kruger.png'
import imageComponents from '../../assets/img/all/components.png'

export class Experiences extends React.Component {
  constructor () {
    super()
    this.state = {
      focusExperience: {},
      blur: false
    }
    this.observer = null
    this.elementObserver = null
    this.children = []
    this.barRef = React.createRef()
    this.fnScrollHandler = this.scrollHandler.bind(this)
    this.experiences = [
      {
        id: 1,
        position: 'Líder Técnico',
        organization: 'Kruger Corporation',
        description: `
          <p>
            Estuve a cargo del equipo de Componentes y Frameworks. Con mi equipo agilizamos y estandarizamos el desarrollo de aplicaciones web, a través de la implementación de una arquitectura mantenible y modular. También desarrollamos utilidades, componentes, módulos y frameworks para el resto de proyectos en Angular, Java y Node.js, acelerando el desarrollo de aplicaciones para el cliente Corporación Favorita. Nos apoyamos de tecnologías como: HTML5, CSS3, Bootstrap, Socket.io, Express.js, Gulp y Babel.
          </p>
        `,
        logo: logoKruger,
        initDate: '10/2015',
        finishDate: '12/2017',
        image: imageComponents
      },
      {
        id: 2,
        position: 'Desarrollador de Software',
        organization: 'Kruger Corporation',
        description: `
          <p>
            Trabaje en el desarrollo de aplicaciones y módulos para el cliente Corporación Favorita. Utilicé tecnologías: Java, JSF, RichFaces, JPA, Hibernate y Spring Framework.
          </p>
        `,
        logo: logoKruger,
        initDate: '10/2014',
        finishDate: '10/2015',
        image: imageComponents
      },
      {
        id: 3,
        position: 'Desarrollador de Software',
        organization: 'Kruger Corporation',
        description: `
          <p>
            Mejore la experiencia de uso de la información catastral de la ciudad de Ibarra y que sea más accesible, mediante la implementación de una nueva arquitectura para aplicaciones SIG, la migración de información a un entorno relacional a través de Postgresql - PostGIS y el desarrollo de algunos Sistemas de Información Geográfica Web, como: 
            <ul>
              <li>SIG GAD Ibarra</li>
              <li>Plan de Ordenamiento Territorial (PDOT)</li>
              <li>Publicidad exterior</li>
              <li>SIG Centro histórico</li>
              <li>SIG Censo PDOT</li>
              <li>SIG Temáticos Catastro.</li>
            </ul>
          </p>
        `,
        logo: logoKruger,
        initDate: '05/2011',
        finishDate: '04/2014',
        image: imageComponents
      }
    ]
  }

  componentDidMount () {
    const node = ReactDOM.findDOMNode(this)
    if (node instanceof HTMLElement) {
      this.children = node.querySelectorAll('article')
    }

    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      this.observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          this.elementObserver = entries[0].target
        }
      }, {
        threshold: [0]
      })

      this.children.forEach(element => {
        this.observer.observe(element)
      })
    })

    window.addEventListener('scroll', this.fnScrollHandler)

    this.setState({ focusExperience: this.experiences[0] })
  }

  componentWillUnmount () {
    this.observer.disconnect()
    window.removeEventListener('scroll', this.fnScrollHandler)
  }

  scrollHandler () {
    if (window.scrollY > this.barRef.current.getBoundingClientRect().top) {
      this.setState({ blur: true })
    } else {
      this.setState({ blur: false })
    }

    if (this.elementObserver && this.elementObserver.getBoundingClientRect().top < this.barRef.current.getBoundingClientRect().bottom) {
      const index = Array.from(this.children).indexOf(this.elementObserver)
      this.setState({ focusExperience: this.experiences[index] })
    }
  }

  render () {
    return (
      <ExpereiencesSection className='container-page'>
        <div className={`experience__bar ${this.state.blur ? 'blur' : ''}`} ref={this.barRef}>
          <h2>Experiencia</h2>
          <h5>
            <i className='icon-circle-slelected' />
            <span>{`${this.state.focusExperience.initDate} - ${this.state.focusExperience.finishDate}`}</span>
          </h5>
        </div>
        <div>
          {
            this.experiences.map(exp => (
              <Experience key={exp.id} data-id={exp.id} {...exp} />
            ))
          }
        </div>
      </ExpereiencesSection>
    )
  }
}
