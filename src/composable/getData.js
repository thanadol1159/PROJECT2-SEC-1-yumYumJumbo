import db from '../../data/product.json'
const getData = () => {
    return db.items
}
export { getData }