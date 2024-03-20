const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const bodyParser = require("body-parser");

class User { 
    fetchUsers (req, res) {
        const fetchUserQuery = `userID, firstName, lastName, userAge, userGender, userEmail, userPassword, userProfile, userRole from Users;`;

    db.query(fetchUserQuery, (err, data) => {
        if(err) throw (err,console.log(err))
        else
        res.status(200).json({
    results: data })
    }) 
    }
}

class Product {
 fetchProducts(req, res) {
        const fetchProductsQuery = `select prodID, prodName, prodPrice, prodQuantity, prodCategory, prodDescription from Products;`;
        
        db.query(fetchProductsQuery, (err, data) => {
            if(err) throw (err, console.log(err));
            else
            res.status(200).json({results: data})
        })
    }

    addProduct(req, res) {
        const addProdQuery = `insert into Prodcuts set ?;`;
        db.query(addProdQuery, [req.body], (err) => {
            if(err) {
                res.status(400).json({
                    err: 'Unable to add Product to database.'
                })
            }else {
                res.status(200).json({
                    msg: 'Product added to database'
                })
            }
        })
    }

    updateProduct(res, req) {
        const updateProdQuery = `update products set ? where prodID = ?;`;

        db.query(updateProdQuery, [req.body, req.params.id], (err) => {

            if(err) {
                res.status(400).json({
                    err: 'Unable to update table in database'
                })
            } else {
                res.status(200).json({
                    msg: 'Product Updated'
                })
            }
        })
    }

    deleteProduct(req, res) {
        const deleteProdQuery = `delete from Products where prodID = ?;`;

        db.query(deleteProdQuery, [req.params.id], (err) => {
            if(err) 
                res.status(400).json({
                    err: 'The'
                })
                res.status(200).json({
                    msg: 'Product was deleted from database!'
                })
        })
    }
}

module.exports = {
    User,
    Product
}