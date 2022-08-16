function getProduct (){
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: 'JSON'
    });

    promise.then(function(result){
        console.log(result.data);
        renderProduct(result.data.content);
    });

    promise.catch(function(error){
        console.log(err);
    });
}

window.onload = function(){
    getProduct();
}

function renderProduct(arrProduct){
    var html ='';
    for (var i = 0; i < arrProduct.length; i++){
        var sp = arrProduct[i];
        html += `
        <div class="item">
                    <div class="item-info">
                        <img src="${sp.image}" alt="" />
                        <h3>${sp.name.slice(0, 10)+'...'}</h3>
                        <p>${sp.shortDescription.slice(0, 10)+ '...'}</p>

                    </div>
                        
                        
                    <div class="buy-button d-flex">
                            <button class="btn-buy-dark buy"><a style="color:#000" class="link" href="../views/detail.html?productid=${sp.id}">Buy now </a></button>
                            <p>${sp.price}$</p>
                        
                    </div>
        </div>

        `;


        

    }
    document.querySelector('#itemList').innerHTML = html;
}