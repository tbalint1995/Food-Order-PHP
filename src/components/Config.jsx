const sess = localStorage.getItem('session_id')

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
const rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyz');

if (!sess) {
    localStorage.setItem('session_id', rString);
}

const Config = {
    imagesPath: '**************************',
    api_url:    '**************************',
    session_id: sess 
}

console.log(Math.random().toString(32).slice(2))

export default Config;