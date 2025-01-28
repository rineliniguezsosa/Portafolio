import { workhistoryprops } from '../types/interfaces';

export const Workhistory: workhistoryprops[] = [
    {
        id:0,
        company:'Caprepa',
        role:'Full stack developer',
        duration:{
            start:'September 2023',
            end:'June 2024'
        },
        type:'on-site'
    },
    {
        id:1,
        company:'Sol4it',
        role:'Front end angular Developer',
        duration:{
            start:'July 2023',
            end:'August 2023'
        },
        type:'remote'
    },
    {
        id:2,
        company:'Paynalli systems',
        role:'Software developer',
        duration:{
            start:'March 2022',
            end:'January 2023'
        },
        type:'hybrid'
    },
    {
        id:3,
        company:'Design and Conservation of DCIESA Properties',
        role:'web developer',
        duration:{
            start:'August 2020',
            end:'December 2020'
        },
        type:'internship'
    }
]

export const Testimonials  = [
    {
        id:0,
        name:'Juan Roberto Peña López.',
        description:"Rinel Iñiguez is a remarkable person with strong values, loyalty, camaraderie, and solidarity. He is an excellent friend and colleague, both personally and professionally. Rinel consistently rises to challenges, adapting and stepping out of his comfort zone to grow as an individual and in his career.",
        img:'../../dist/assets/images/testimonial1.jpeg',
        position:'Full Stack Developer'
    },
    {
        id:1,
        name:'Samir jimenez',
        description:'I know Rinel as a talented and passionate programmer. He is always looking for innovative and effective solutions, and his dedication is inspiring. A great teammate, willing to share knowledge and collaborate in search of meeting all project requirements and adding additional value',
        img:'../../dist/assets/images/testimonial2.jpg',
        position:'Middleware Jr'
    }
]