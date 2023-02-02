const apiController = {
    index(req, res, next){
      res.json(res.locals.data.festivals);
    },
    show(req, res, next){
      res.json(res.locals.data.festival);
    },
  };
  
  
  module.exports = apiController;