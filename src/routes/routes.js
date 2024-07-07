'use strict';

module.exports = function(app) {
    var jsn = require('../controller/controller');
    var auth = require('../controller/authController');

    app.route('/')
        .get(jsn.index);
    
    app.route('/login')
        .get(auth.login);

    app.route('/showallproduct')
        .get(jsn.showallproduct);
    
    app.route('/showproduct/:id')
        .get(jsn.showproduct);

    app.route('/addproduct')
        .post(jsn.addproduct);

    app.route('/updateproduct')
        .post(jsn.updateproduct);
    
    app.route('/deleteproduct')
        .post(jsn.deleteproduct);

    app.route('/showallproductbrand')
        .get(jsn.showallproductbrand);
    
    app.route('/showproductbrand/:id')
        .get(jsn.showproductbrand);

    app.route('/addproductbrand')
        .post(jsn.addproductbrand);

    app.route('/updateproductbrand')
        .post(jsn.updateproductbrand);
    
    app.route('/deleteproductbrand')
        .post(jsn.deleteproductbrand);

    app.route('/showallstore')
        .get(jsn.showallstore);
    
    app.route('/showstore/:id')
        .get(jsn.showstore);

    app.route('/showstoreacc/:id')
        .get(jsn.showstoreacc);

    app.route('/showstorearea/:id')
        .get(jsn.showstorearea);

    app.route('/showstorestatus/:id')
        .get(jsn.showstorestatus);

    app.route('/addproduct')
        .post(jsn.addproduct);

    app.route('/updateproduct')
        .post(jsn.updateproduct);
    
    app.route('/deleteproduct')
        .post(jsn.deleteproduct);

    // app.route('/showreport')
    //     .get(jsn.showreportproduct);
}