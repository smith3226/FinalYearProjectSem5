const Menu = require('../../models/menu')
const user = require('../../models/user')
function homeController() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            return res.render('home', { pizzas: pizzas})
        }
    }
}

module.exports = homeController