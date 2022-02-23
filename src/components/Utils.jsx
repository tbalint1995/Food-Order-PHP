import Config from "./Config";

const { api_url } = Config;

  const addToCart = async (data) => {
    const response = await fetch(`${api_url}?case=add_to_cart`, {
        method: 'POST',
      
            headers: {
                'Content-Type': 'application/json',  // sent request (alt: 'application/x-www-form-urlencoded')
                'Accept': 'application/json',   // expected data sent back
                
            },
       
        body: JSON.stringify(data),

        credentials: 'same-origin',
 
    });
    return response.json()
}


const deleteFromCart = async (data) => {
    const response = await fetch(`${api_url}?case=delete_from_cart`, {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',           
            },
        body: JSON.stringify(data),
        credentials: 'same-origin',
    });
    return response.json()
}


export {addToCart, deleteFromCart} 