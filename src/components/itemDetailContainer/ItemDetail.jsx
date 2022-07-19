import './ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({item}) => {

    //const {nombre, precio, img, stock, descripcion} = item

    return (

        <div className="itemDetail">
            <div className="img-detail-cont">
                <img src={item.img} alt={item.nombre} className='img-detail'/>
            </div>
            <div className="text-container">
                <div className="titulo-container">
                    <h1>{item.nombre}</h1>
                    <h3>${item.precio}</h3>
                </div>
                <p>
                    {item.descripcion}
                </p>
                <p>Stock Disponible {item.stock}</p>
                <ItemCount stock={item.stock} inicio={1}/>
            </div>
        </div>
    )
}

export default ItemDetail





