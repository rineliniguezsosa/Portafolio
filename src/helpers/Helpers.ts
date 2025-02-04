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
        description:'This is a repository to work on all react native navigations',
        img:'',
        url:'https://github.com/rineliniguezsosa/navigation-react-native'
    },
    {
        id:1,
        name:'Context app',
        description:'This is a simple repository to share context between elements using zustand',
        img:'',
        url:'https://github.com/rineliniguezsosa/contextapp'
    },
    {
        id:2,
        name:'Box model',
        description:'React Native project showcasing the Box Model with padding, margin, border, and position for responsive layouts.',
        img:'',
        url:'https://github.com/rineliniguezsosa/box-model-react-native'
    },
    {
        id:3,
        name:'React native components',
        description:'This repository shows you all the react-native components',
        img:'',
        url:'https://github.com/rineliniguezsosa/components-react-native'
    },
    {
        id:4,
        name:'Products app',
        description:'ProductsApp is an app that includes product management, navigation, authentication and protected routes with a modern interface',
        img:'',
        url:'https://github.com/rineliniguezsosa/productsapp'
    }

]

export const frontendmentorprojects : projectProps[] = [
    {
        id:0,
        name:'App countries',
        description:'A React app using the REST Countries API to display country data with a light/dark theme switcher and responsive design..',
        img:'/Portafolio/assets/images/appcountriespreview.jpg',
        url:'https://rineliniguezsosa.github.io/appcountries/'
    },
    {
        id:1,
        name:'Ip address tracker',
        description:'A web app to track IP addresses, displaying location, ISP, and map data in real-time.',
        img:'/Portafolio/assets/images/ipaddresspreview.jpg',
        url:'https://rineliniguezsosa.github.io/ip-address-tracker/'
    },
    {
        id:2,
        name:'Four card feature section',
        description:'Four Card Feature Section" es un diseño web responsivo de cuatro tarjetas usando Flexbox y CSS Grid.',
        img:'/Portafolio/assets/images/fourcardpreview.jpg',
        url:'https://rineliniguezsosa.github.io/four-card-feature-section/'
    },
    {
        id:3,
        name:'Product preview card component',
        description:'A responsive, interactive product preview card component.',
        img:'/Portafolio/assets/images/productpreview.jpg',
        url:'https://rineliniguezsosa.github.io/product-preview-card-component/'
    },
    {
        id:4,
        name:'Recipe page',
        description:'A recipe page with a clean, accessible layout to display ingredients and instructions.',
        img:'/Portafolio/assets/images/recipepagepreview.jpg',
        url:'https://rineliniguezsosa.github.io/recipe-page/'
    },
    {
        id:5,
        name:'Social links profile',
        description:'A user profile with social links, designed in a simple and modern way.',
        img:'/Portafolio/assets/images/socialinkspreview.jpg',
        url:'https://rineliniguezsosa.github.io/social-links-profile/'
    },
    {
        id:6,
        name:'Blog preview card',
        description:'Blog preview card with attractive and functional design, responsive to devices.',
        img:'/Portafolio/assets/images/blogcardpreview.jpg',
        url:'https://rineliniguezsosa.github.io/blog-preview-card/'
    },
    {
        id:7,
        name:'QR code component',
        description:'An interactive QR code component with title and subtitle, designed for the web.',
        img:'/Portafolio/assets/images/qrcodepreview.jpg',
        url:'https://rineliniguezsosa.github.io/qr-code-component/'
    }
]

export const reactprojects: projectProps[] = [
    {
        id:0,
        name:'Portfolio',
        description:'Personal portfolio developed with React, TypeScript and TailwindCSS to show projects and skills.',
        img:'',
        url:'https://github.com/rineliniguezsosa/Portafolio'
    },
    {
        id:1,
        name:'Material ui',
        description:'This project documents and practices key components of Material-UI in web applications',
        img:'',
        url:'https://github.com/rineliniguezsosa/Material-ui'
    },
    {
        id:2,
        name:'React typescript',
        description:'Repository that documents React hooks using TypeScript.',
        img:'',
        url:'https://github.com/rineliniguezsosa/React-typescript'
    },
    {
        id:3,
        name:'React-js',
        description:'Repository with examples of React.js, Redux and Hooks, including counter applications and hero management',
        img:'',
        url:'https://github.com/rineliniguezsosa/React-js'
    },
    {
        id:4,
        name:'React styled component',
        description:'React project with Styled Components to design interfaces with dynamic and reusable styles.',
        img:'',
        url:'https://github.com/rineliniguezsosa/React-styled-component'
    },
]