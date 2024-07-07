'use strict';

var response = require('../res');
var connection = require('../connection');

exports.index = function(req, res){
    response.ok(" Application Running",res);
}

exports.showallproduct = function(req,res){
    connection.query('select * from product', function(error,rows,fields){
        if(error){
            console.log("sad",error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.showproduct = function(req,res){
    let id = req.params.id;
    connection.query('select * from product where product_id = ?',[id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.addproduct = function(req,res){
    var product_name = req.body.product_name;
    var brand_id = req.body.brand_id;

    connection.query('INSERT INTO product (product_name,brand_id) VALUES(?,?)',[product_name,brand_id], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

exports.updateproduct = function(req,res){
    var product_id = req.body.product_id;
    var product_name = req.body.product_name;
    var brand_id = req.body.brand_id;

    connection.query('UPDATE product SET product_name = ?, brand_id = ? where product_id = ?',[product_name,brand_id,product_id], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Mengubah Data!",res)
        }
    });
};

exports.deleteproduct = function(req,res){
    var product_id = req.body.product_id;

    connection.query('DELETE from product where product_id = ?',[product_id], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menghapus Data!",res)
        }
    });
};

exports.showallproductbrand = function(req,res){
    connection.query('select * from product_brand', function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.showproductbrand = function(req,res){
    let id = req.params.id;
    console.log(id);

    connection.query('select * from product_brand where brand_id = ?',[id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.addproductbrand = function(req,res){
    var brand_name = req.body.brand_name;

    connection.query('INSERT INTO product_brand (brand_name) VALUES(?)',[brand_name], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

exports.updateproductbrand = function(req,res){
    var brand_id = req.body.brand_id;
    var brand_name = req.body.brand_name;

    connection.query('UPDATE product_brand SET brand_name = ? where brand_id = ?',[brand_name,brand_id], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Mengubah Data!",res)
        }
    });
};

exports.deleteproductbrand = function(req,res){
    var brand_id = req.body.brand_id;

    connection.query('DELETE from product_brand where brand_id = ?',[brand_id], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menghapus Data!",res)
        }
    });
};

exports.showallstore = function(req,res){
    connection.query('select * from store', function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.showstore = function(req,res){
    let id = req.params.id;
    console.log(id);

    connection.query('select * from store where store_id = ?',[id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.showstoreacc = function(req,res){
    let id = req.params.id;
    console.log(id);

    connection.query('select * from store where account_id = ?',[id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.showstorearea = function(req,res){
    let id = req.params.id;
    console.log(id);

    connection.query('select * from store where area_id = ?',[id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.showstorestatus = function(req,res){
    let id = req.params.id;
    console.log(id);

    connection.query('select * from store where is_active = ?',[id], function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.addstore = function(req,res){
    var store_name = req.body.store_name;
    var acc_id = req.body.account_id;
    var area_id = req.body.area_id;
    var is_active = req.body.is_active;

    connection.query('INSERT INTO product_brand (store_name,account_id,area_id,is_active) VALUES(?)',[store_name,acc_id,area_id,is_active], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

exports.updatestore = function(req,res){
    var store_id = req.body.store_id;
    var store_name = req.body.store_name;
    var acc_id = req.body.account_id;
    var area_id = req.body.area_id;
    var is_active = req.body.is_active;

    connection.query('UPDATE product_brand SET store_name = ?, account_id = ?, area_id = ?, is_active = ? where store_id = ?',[store_name,acc_id,area_id,is_active,store_id], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Mengubah Data!",res)
        }
    });
};

exports.deletestore = function(req,res){
    var store_id = req.body.store_id;

    connection.query('DELETE from product_brand where store_id = ?',[store_id], function(error){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menghapus Data!",res)
        }
    });
};



// exports.showreportproduct = function(req,res){

//     connection.query('SELECT * FROM `report_product` inner JOIN store on report_product.store_id = store.store_id',
//         function(error){
//             if(error){
//                 console.log(error);
//             }else {
//                 response.oknest("Berhasil Menampilkan Report",res)
//             }
//         });
// };