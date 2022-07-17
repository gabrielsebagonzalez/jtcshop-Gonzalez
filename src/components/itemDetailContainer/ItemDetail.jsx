import './ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({item}) => {

    const {nombre, precio, img, stock, descripcion} = item

    return (

        <div className="itemDetail">
            <div className="img-detail-cont">
                <img src={img} alt={nombre} className='img-detail'/>
            </div>
            <div className="text-container">
                <div className="titulo-container">
                    <h1>{nombre}</h1>
                    <h3>${precio}</h3>
                </div>
                <p>
                    {descripcion}
                </p>
                <p>Stock Disponible {stock}</p>
                <ItemCount stock={8} inicio={1}/>
            </div>
        </div>
    )
}

export default ItemDetail





