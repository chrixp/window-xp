const consumifyObject = (obj) => {
    return  Object.keys(obj).reduce((prev, cur) => ([
        ...prev,
        {
            ...obj[cur],
            key: cur
        }
    ]), [])
}

export default consumifyObject