//const bcrypt = require("bcryptjs/dist/bcrypt");
const bcrypt = require('bcryptjs');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function(knex) {
     await knex('company').del();
     await knex('company').insert([
       { id: 1, 'company_name':'UKG'},
       { id: 2, 'company_name':'InboxInventors'}
       ]);
     await knex('employees').del();
     await knex('employees').insert([
       { id: 1, company_id: 1, manager_id: 2, 'first_name': 'Benjamin', 'last_name': 'Melz', email: 'bm@gmail.com', password: bcrypt.hashSync('cs320'), isManager: 0 },
       { id: 2, company_id: 2, manager_id: 0, 'first_name': 'Heath', 'last_name': 'Brames', email: 'hb@gmail.com', password: bcrypt.hashSync('cs320'), isManager: 1}
     ]);
    await knex('pto').del();
    await knex('pto').insert([
      { id: 1, emp_id:1, manager_id: 2, 'type': 'medical', start_date: '2000-08-30', end_date: '2000-08-31', approved: 1},
      { id: 2, emp_id:2, manager_id: 2, 'type': 'vacation', additional_info: 'going to Cancun', start_date: '2000-09-20', end_date: '2000-09-29', approved: 0},
      { id: 3, emp_id:2, manager_id: 2, 'type': 'leave', additional_info: 'paternity leave', start_date: '2000-09-21', end_date: '2000-12-29', approved: 0},
      { id: 4, emp_id:1, manager_id: 2, 'type': 'medical', start_date: '2000-09-12', end_date: '2000-11-12', approved: 0},
    
    ]);
    await knex('performance').del();
    await knex('performance').insert([
      { id: 1, from_employee:1, to_employee: 2, 'comments': 'good job', growth: 9, kindness: 10, delivery: 8, status: 0},
      { id: 2, from_employee:1, to_employee: 2, 'comments': 'awesome job', growth: 10, kindness: 10, delivery: 10, status: 0},
      { id: 3, from_employee:2, to_employee: 1, 'comments': 'good job', growth: 10, kindness: 10, delivery: 10, status: 0},
    ]);
    await knex('training').del();
    await knex('training').insert([
      { id: 1, manager_id:1, emp_id: 2, 'training_link':'umass.moonami.com', 'additional_info':'complete your course!', start_date:'2000-08-30', end_date: '2000-08-31', completed: 1},
      { id: 2, manager_id:1, emp_id: 2, 'training_link':'umass.edu', 'additional_info':'none', start_date:'2000-09-10', end_date: '2000-09-30', completed: 0},
      { id: 3, manager_id:1, emp_id: 1, 'training_link':'umass.edu', 'additional_info':'none', start_date:'2000-09-10', end_date: '2000-09-30', completed: 0},
    
    
    ]);
    
  };
