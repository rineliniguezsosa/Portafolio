import { workhistoryprops,projectProps, TestimonialCardProps } from '../types/interfaces';

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

export const Testimonials: TestimonialCardProps[]  = [
    {
        id:0,
        name:'Juan Roberto',
        description:"Rinel Iñiguez is a remarkable individual known for his strong values, loyalty, camaraderie, and solidarity. As a friend and colleague, he excels both personally and professionally, embracing challenges, adapting, and stepping out of his comfort zone to achieve growth in his life and career.",
        img:'/Portafolio/assets/images/testimonial1.jpeg',
        position:'Full Stack Developer'
    },
    {
        id:1,
        name:'Samir jimenez',
        description:'I know Rinel as a talented and passionate programmer. He is always looking for innovative and effective solutions, and his dedication is inspiring. A great teammate, willing to share knowledge and collaborate in search of meeting all project requirements and adding additional value',
        img:'/Portafolio/assets/images/testimonial2.jpg',
        position:'Middleware Jr'
    },
    {
        id:2,
        name:'Joshua Emmanuel',
        description:'Rinel Iñiguez Sosa is a great fullstack MERN developer. He has created various apps and has taught me in TypeScript, backend with Node.js and TS, React with Vite, consumption and development of APIs and middlewares. His guidance has helped me a lot to improve my skills',
        img:'/Portafolio/assets/images/testimonial3.jpg',
        position:'Full stack jr'
    },
    {
        id:3,
        name:'Victoria esperanza',
        description:'I had the opportunity to work with Eng. Rinel at Paynalli Systems and he is an exceptional programmer. Excels in TypeScript and ReactJS, solving complex problems with clean and efficient code. Their commitment and teamwork drove significant progress on the projects.',
        img:'/Portafolio/assets/images/testimonial4.jpeg',
        position:'Front end developer'
    },
    {
        id:4,
        name:'Mario pinto',
        description:'I have known Rinel since college and I can say that he is a reliable, dedicated and passionate person about programming.',
        img:'/Portafolio/assets/images/testimonial5.jpeg',
        position:'B2M project engineer'
    }
]

export const reactnativeprojects: projectProps[]  = [
    {
        id:0,
        name:'Navigation in React Native',
        description:'',
        img:'',
        url:''
    }
]