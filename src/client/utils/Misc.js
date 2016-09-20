
class noSpam{
  constructor(id){
    this.lastTimeout = 0;
    this.id = id;
  }
  go(fx,timeout){
    clearTimeout(this.lastTimeout);
    this.lastTimeout = setTimeout( () => {
      if(this.id) console.log(this.id + ' FIRING.');
      fx();
    },timeout);
  }
}

module.exports = { noSpam }