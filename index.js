const form =document.getElementById('my-form');

const itemList = document.getElementById('Items');

form.addEventListener('submit',AddItem);


function AddItem(e){
    e.preventDefault();

    const name=document.getElementById('name').value;
    const description = document.getElementById('des').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    const obj = {
        Name:name,
        Description:description,
        Price:price,
        Quantity:quantity
    }
    axios.post('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items',obj)
        .then((res)=>{
            console.log(res);
            showItem(obj);
        })
        .catch((err)=>console.log(err))

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items')
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                
                showItem(res.data[i]);
            }
        })
})

function showItem(obj){

    const newItem=document.createElement('li');
    newItem.appendChild(document.createTextNode(obj.Name+" "+obj.Description+" "+obj.Price+" "+obj.Quantity));

    const newBtn1 = document.createElement('button');
    newBtn1.appendChild(document.createTextNode('buy1'));
    newItem.appendChild(newBtn1);

    newBtn1.onclick=(e)=>{
        var id =obj._id;
        axios.put('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items/'+id,{
            Name:obj.Name,
            Description:obj.Description,
            Price:obj.Price,
            Quantity:obj.Quantity-1
        })
            .then((res)=>{
               
            })
            .catch((err)=>console.log(err));
        axios.get('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items/'+id)
            .then((res)=>{
                newObj=res.data;
                const li = e.target.parentElement;
                li.firstChild.textContent=newObj.Name+" "+newObj.Description+" "+newObj.Price+" "+newObj.Quantity
            })
            .catch((err)=>console.log(err));
    }

    const newBtn2 = document.createElement('button');
    newBtn2.appendChild(document.createTextNode('buy2'));
    newItem.appendChild(newBtn2);

    newBtn2.onclick=(e)=>{
        var id =obj._id;
        axios.put('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items/'+id,{
            Name:obj.Name,
            Description:obj.Description,
            Price:obj.Price,
            Quantity:obj.Quantity-2
        })
            .then((res)=>{
               
            })
            .catch((err)=>console.log(err));
        axios.get('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items/'+id)
            .then((res)=>{
                newObj=res.data;
                const li = e.target.parentElement;
                li.firstChild.textContent=newObj.Name+" "+newObj.Description+" "+newObj.Price+" "+newObj.Quantity
            })
            .catch((err)=>console.log(err));
    }

    const newBtn3 = document.createElement('button');
    newBtn3.appendChild(document.createTextNode('buy3'));
    newItem.appendChild(newBtn3);

    newBtn3.onclick=(e)=>{
        var id =obj._id;
        axios.put('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items/'+id,{
            Name:obj.Name,
            Description:obj.Description,
            Price:obj.Price,
            Quantity:obj.Quantity-3
        })
            .then((res)=>{
               
            })
            .catch((err)=>console.log(err));
        var id=obj._id;
        axios.get('https://crudcrud.com/api/7ad9efcf65254fb08fd99c058fe513cc/Items/'+id)
            .then((res)=>{
                newObj=res.data;
                const li = e.target.parentElement;
                li.firstChild.textContent=newObj.Name+" "+newObj.Description+" "+newObj.Price+" "+newObj.Quantity
            })
            .catch((err)=>console.log(err));
    }

    itemList.appendChild(newItem);
}