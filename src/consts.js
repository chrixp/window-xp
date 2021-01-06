export const APP_TYPES = {
    IMAGE: 'image',
    WIDGET: 'widget',
    ERROR: 'error',
    COMPUTER: 'computer',
    EXTERNAL: 'external',
    NOTEPAD: 'notepad',
    VIRUS: 'virus'
}

export const menuApplications = [
    {
        img: 'documents.png',
        desc: 'My Documents'
    },
    {
        img: 'control.png',
        desc: 'Control Panel'
    },
    {
        img: 'printer.png',
        desc: 'Printer and Faxes'
    },
    {
        img: 'help.png',
        desc: 'Help and Support'
    },
    {
        img: 'search.png',
        desc: 'Search'
    },
    {
        img: 'run.png',
        desc: 'Run...'
    },
    {
        img: 'recycle.png',
        desc: 'Recycle Bin',
    }
]

export const defaultPosition = { x: 0, y: 0 }

export const defaultOpenApplicationProperties = {
    defaultPosition,
    open: false,
    resized: true,
    minimized: false
}

const applicationChildren = {
    eyes: {
        img: 'my-eyes.jpeg',
        desc: "Can't Take My Eyes Off You ",
        externalLink: 'https://www.youtube.com/watch?v=LcJm1pOswfM',
        type: APP_TYPES.EXTERNAL
    },
    road: {
        img: 'hit-the-road.jpg',
        desc: 'Hit The Road, Jack',
        externalLink: 'https://www.youtube.com/watch?v=Q8Tiz6INF7I',
        type: APP_TYPES.EXTERNAL
    },
    moon: {
        img: 'the-moon.jpg',
        desc: 'Fly Me To The Moon',
        externalLink: 'https://www.youtube.com/watch?v=ZEcqHA7dbwM',
        type: APP_TYPES.EXTERNAL
    },
    leaves: {
        img: 'autumn.jpeg',
        desc: 'The Autumn Leaves - With Rap Verse',
        externalLink: 'https://www.youtube.com/watch?v=bTZoLwWfACA',
        type: APP_TYPES.EXTERNAL
    },
    linkedin: {
        img: 'linkedin.png',
        desc: 'LinkedIn',
        externalLink: 'https://www.linkedin.com/in/nhat-chris-phan/',
        type: APP_TYPES.EXTERNAL
    },
    insta: {
        img: 'insta.jpeg',
        desc: 'Instagram',
        externalLink: 'https://www.instagram.com/nphan108/',
        type: APP_TYPES.EXTERNAL
    },
    gmail: {
        img: 'gmail.png',
        desc: 'Gmail',
        externalLink: 'mailto:nhat.q.phan.108@gmail.com',
        type: APP_TYPES.EXTERNAL
    },
    aws: {
        img: 'aws.png',
        desc: 'Amazon Web Services',
        externalLink: 'https://aws.amazon.com/',
        type: APP_TYPES.EXTERNAL
    },
    boa: {
        img: 'boa.png',
        desc: 'Bank Of America',
        externalLink: 'https://www.bankofamerica.com/',
        type: APP_TYPES.EXTERNAL
    },
    squared: {
        img: 'squared-labs.png',
        desc: 'Squared Labs',
        externalLink: 'https://squaredlabs.uconn.edu/',
        type: APP_TYPES.EXTERNAL
    },
    schwartz: {
        img: 'schwartz.png',
        desc: 'Schwartz Lab',
        externalLink: 'https://schwartzlab.uconn.edu/',
        type: APP_TYPES.EXTERNAL
    },
    personal: {
        img: 'personal.jpg',
        desc: 'The Only Good Picture Of Me',
        type: APP_TYPES.IMAGE
    },
    onlyfans: {
        img: 'onlyfans.png',
        desc: 'OnlyFans',
        type: APP_TYPES.ERROR
    }
}
const baseApplicationState = {
    computer: {
        img: 'computer-icon.png',
        desc: 'My Computer',
        x: 10,
        y: 1,
        bars: ['File', 'Edit', 'View', 'Favorites','Tool','Help'],
        children: ['music', 'social', 'picture', 'work'],
        type: APP_TYPES.COMPUTER
    },
    music: {
        img: 'music.png',
        desc: 'My Music',
        y: 100,
        x: 18,
        children: ['eyes', 'moon', 'road', 'leaves'],
        type: APP_TYPES.COMPUTER
    },
    picture: {
        img: 'pictures.png',
        desc: 'My Pictures',
        y: 200,
        x: 10,
        children: ['personal'],
        type: APP_TYPES.COMPUTER
    },
    work: {
        img: 'work.png',
        desc: 'Work Experience',
        children: ['aws', 'boa', 'squared', 'schwartz'],
        y: 300,
        x: 2
    },
    paint: {
        img: 'paint-icon.png',
        desc: 'Paint',
        link: 'https://jspaint.app',
        y: 400,
        x: 20,
        type: APP_TYPES.WIDGET
    },
    website: {
        img: 'chris-icon.png',
        link: 'https://nqp16001.github.io',
        desc: 'Old Website',
        width: 100,
        y: 1,
        x: 100,
        type: APP_TYPES.WIDGET
    },
    resume : {
        img: 'resume.png',
        desc: 'Resume',
        picture: true,
        y: 100,
        x: 130,
        type: APP_TYPES.IMAGE
    },
    notepad: {
        img: 'notepad-icon.png',
        desc: 'Notepad',
        y: 200,
        x: 130,
        bars: ['File','Edit','Format','View','Help'],
        type: APP_TYPES.NOTEPAD
    },
    virus: {
        img: 'virus.png',
        desc: 'VIRUS !!! DO NOT CLICK!!!!',
        y: 300,
        x: 130,
        type: APP_TYPES.VIRUS
    },
    social: {
        img: 'social.png',
        desc: 'My Social Media',
        children: ['linkedin' , 'insta', 'gmail', 'onlyfans'],
        y: 400,
        x: 115,
        type: APP_TYPES.COMPUTER
    },

    ...applicationChildren
}

export const defaultApplicationState = Object.keys(baseApplicationState).reduce((prev,cur) => ({
    ...prev,
    [cur]: {
        ...baseApplicationState[cur],
        ...defaultOpenApplicationProperties
    }
}), {})

