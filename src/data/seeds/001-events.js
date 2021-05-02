
let date1a = Date.UTC(2021, 4, 7, 17, 30);
let date1b = Date.UTC(2021, 4, 7, 19, 0);
let date2a = Date.UTC(2021, 4, 7, 19, 0);
let date2b = Date.UTC(2021, 4, 7, 21, 0);
let date3a = Date.UTC(2021, 4, 7, 19, 0);
let date3b = Date.UTC(2021, 4, 7, 21, 0);


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
