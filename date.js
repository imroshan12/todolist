var options = { weekday: 'long', day: '2-digit', month: 'long' };
var date = new Date();
module.exports.today = date.toLocaleDateString("en-US", options);
