'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
}

// exports.oknest = function(values,res){

//     const result = values.reduce((acc, item)=>{

//         if(acc[item.report_id]){

//             const group = acc[item.report_id];

//             if(Array=isArray[group.store_name]){
//                 group.store_name.push(item.store_name);
//             }else {
//                 group.store_name = [group.store_name , item.store_name];
//             }
//         }else {
//             acc[item.report_id] = item;
//         }
//         return acc;
//     },{});

//     var data = {
//         'status':200,
//         'values':result
//     };

//      res.json(data);
//      res.end();

// }
