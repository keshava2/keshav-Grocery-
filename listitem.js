import "./App.css"
export default function ListItems({ items, itemSelected, deleteItem }) {
    if(!items.length) return <h2>No items! Please add.</h2>
    //1 20 = 20
    //2 30 = 60 -- 80
    const totalPrice = items.reduce((acc,item) => {
        return (acc = acc + item.price * item.quantity);
    },0);
   
    return (
        <div> 
            <h3>Item List</h3>
            {
                items.map((item, index) => ( 
                    <ItemDisplay key={index} item={item} itemSelected={itemSelected} deleteItem={deleteItem} /> 
                ))
            }
            <div> Total Price:{totalPrice}</div>
        </div>
    );
}

function ItemDisplay({ item, itemSelected, deleteItem }) {
    return (
        <div className="item">
            <div>
                <input type = "checkbox" checked = {item.itemSelected} onchange = {() => itemSelected(item.id)}/>
            </div>
            <div>{item.name}</div> 
            <div>{item.quantity}</div> 
            <div>{item.price}</div> 
            <div>{item.quantity * item.price}</div> 
            <div onClick={() => deleteItem(item.id)}>X</div>
        </div>
    );
}