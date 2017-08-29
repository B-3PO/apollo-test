const Sequelize = require('Sequelize');

const db = new Sequelize('bypass', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

const VenueModel = db.define('venue', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

const LocationModel = db.define('location', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

const MenuModel = db.define('menu', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

const MenuLocationsModel = db.define('location_menus', {
  location_id: { type: Sequelize.INTEGER },
  menu_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

const CategoryModel = db.define('category', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

const MenuItemModel = db.define('menu_item', {
  price: { type: Sequelize.DECIMAL },
  menu_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

const ItemModel = db.define('item', {
  name: { type: Sequelize.STRING },
  category_id: { type: Sequelize.INTEGER }
}, { timestamps: false });


VenueModel.hasMany(LocationModel, { foreignKey: 'venue_id' });
VenueModel.hasMany(MenuModel, { foreignKey: 'venue_id' });
LocationModel.belongsToMany(MenuModel, { through: 'location_menus', foreignKey: 'location_id' });
MenuModel.belongsToMany(LocationModel, { through: 'location_menus', foreignKey: 'menu_id' });


MenuModel.hasMany(MenuItemModel, { foreignKey: 'menu_id' });

// CategoryModel.hasMany(ItemModel, { foreignKey: 'category_id' });
// MenuModel.hasMany(ItemModel, { foreignKey: 'item_id' });
// CategoryModel.belongsToMany(MenuModel, { through: 'menu_item', foreignKey: 'menu_id' });
// MenuModel.belongsToMany(CategoryModel, { through: 'item', foreignKey: 'category_id' });
// ItemModel.hasMany(MenuModel, { foreignKey: 'item_id' });



const Venue = db.models.venue;
const Location = db.models.location;
const Menu = db.models.menu;
const Category = db.models.category;
const Item = db.models.item;

module.exports = { Venue, Location, Menu, Category, Item };
