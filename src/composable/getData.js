import db from '../../data/db.json'
const getData = () => {
    return db.items
}

export { getData }