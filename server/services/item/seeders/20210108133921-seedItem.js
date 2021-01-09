'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Items', [{
     name: "laptop",
     price: 5000000,
     desc: "lenovo thinkpad x201",
     image_url: "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Lenovo_Yoga_730_13/Lenovo_Yoga_730_13_L_1.jpg",
     createdAt: new Date(),
     updatedAt: new Date()
   }], {})

  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Items', null, {})
  }
};
