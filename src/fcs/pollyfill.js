const pollyfill = {
  includes: function(item){
    return item.indexOf('2,1') > -1;
  },
}

module.exports = pollyfill;
