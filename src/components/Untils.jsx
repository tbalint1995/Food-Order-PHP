function getItemById(id, items) {
    
    const itemIndex = items.findIndex(item => item.id == id);
    
    if( itemIndex > -1 )
        return items[itemIndex]
    return 
        return false;

}

// Create our number formatter.
var CurrencyFormatter = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0

  });
  
 

function getDefaultSizeById(id, items) {
    const sizes = getItemById(id, items).sizes;
    const defaultSizeIndex = sizes.findIndex(size => size.default === true);

    if( defaultSizeIndex > -1 )
        return sizes[defaultSizeIndex];
    else
        return false;
}

export { getItemById, getDefaultSizeById, CurrencyFormatter };