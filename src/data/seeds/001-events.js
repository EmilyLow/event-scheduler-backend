
// let date1a = new Date(2021, 4, 7, 17, 30).toISOString().slice(0,19).replace('T', ' ');
// let date1b = new Date(2021, 4, 7, 19, 0).toISOString().slice(0,19).replace('T', ' ');
// let date2a = new Date(2021, 4, 7, 19, 0).toISOString().slice(0,19).replace('T', ' ');
// let date2b = new Date(2021, 4, 7, 21, 0).toISOString().slice(0,19).replace('T', ' ');
// let date3a = new Date(2021, 4, 7, 19, 0).toISOString().slice(0,19).replace('T', ' ');
// let date3b = new Date(2021, 4, 7, 21, 0).toISOString().slice(0,19).replace('T', ' ');

let date1a = new Date(2021, 4, 7, 17, 30).toISOString().replace('T', ' ');
let date1b = new Date(2021, 4, 7, 19, 0).toISOString().replace('T', ' ');
let date2a = new Date(2021, 4, 7, 19, 0).toISOString().replace('T', ' ');
let date2b = new Date(2021, 4, 7, 21, 0).toISOString().replace('T', ' ');
let date3a = new Date(2021, 4, 7, 19, 0).toISOString().replace('T', ' ');
let date3b = new Date(2021, 4, 7, 21, 0).toISOString().replace('T', ' ');


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          event_name: "Opening Ceremony",
          speaker: "Eric Delgado",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          location: "Lobby",
          start_time: date1a,
          end_time: date1b,
          start_col: 2,
          span: 12,
          color: "#A3F8A3" //green
      }, 
      {
          id: 2,
          event_name: "Meet and Greet",
          speaker: "Lila Tucker",
          summary: "Sed vulputate fermentum tellus viverra placerat. Donec vulputate tortor justo, ut congue urna pharetra vel.",
          location: "Conference Room A",
          start_time: date2a,
          end_time: date2b,
          start_col: 2,
          span: 6,
          color: "#A8EBF3" //blue


      },
      {
          id: 3,
          event_name: "VIP Salon",
          speaker: "Lynn Lambert",
          summary: "Sed sit amet tempus libero.",
          location: "",
          start_time: date3a,
          end_time: date3b,
          start_col: 8,
          span: 6,
          color: "#F3B0A8" //pink
      },
      ]);
    });
};
