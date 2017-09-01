module.exports = {
  Venue: require('./venue'),
  VenuesLocationsModel: require('./venuesLocations'),
  Location: require('./location'),
  LocationsMenus: require('./locationsMenus'),
  Menu: require('./menu'),
  MenusCategories: require('./menusCategories'),
  Category: require('./category'),
  CategoriesItems: require('./categoriesItems'),
  Item: require('./item'),
  ItemsModifierGroups: require('./itemsModifierGroups'),
  ModifierGroup: require('./modifierGroup'),
  ModifierOption: require('./modifierOption'),
  VenuesMenus: require('./venuesMenus'),
  groupBy: groupBy
};

function groupBy(data, attribute) {
  let obj = data.reduce((a, b) => {
    (a[b[attribute]] = a[b[attribute]] || []).push(b);
    return a;
  }, {})
  return Object.keys(obj).map(attribute => obj[attribute]);
};
