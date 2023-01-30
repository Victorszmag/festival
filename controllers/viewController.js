const RESOURCE_PATH = "/festivals";

const viewController = {
  //index
  index(req, res) {
    res.render("festivals/Index", res.locals.data);
  },
  //show
  show(req, res) {
    res.render("festivals/Show", res.locals.data);
  },
  //edit
  edit(req, res) {
    res.render("festivals/Edit", res.locals.data);
  },
  //new
  newView(req, res) {
    res.render("festivals/New");
  },
  //home redirect
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH);
  },
  //show redirect
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`);
  },
};

module.exports = viewController;
