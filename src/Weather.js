function Weather() {

};

Weather.prototype.isStormy = function() {
  return (Math.random() > 0.5) ? true : false;
};
