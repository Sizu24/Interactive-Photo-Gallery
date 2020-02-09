// Run lightbox plugin
$("#lightgallery").lightGallery({
  thumbnail: true
});


// Array of quotes for images
const quotes = [
  "<h1>Hay Bales</h1>\
  I love hay bales. Took this snap on a drive through the countryside past some straw fields.",

  "<h1>Lake</h1>\
  The lake was so calm today. We had a great view of the snow on the mountains from here.",

  "<h1>Canyon</h1>\
  I hiked to the top of the mountain and got this picture of the canyon and trees below.",

  "<h1>Iceberg</h1>\
  It was amazing to see an iceberg up close, it was so cold but didn’t snow today.", 

  "<h1>Desert</h1>\
  The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking \
  through the canyons.",

  "<h1>Fall</h1>\
  Fall is coming, I love when the leaves on the trees start to change color.",

  "<h1>Plantation</h1>\
  I drove past this plantation yesterday, everything is so green!",

  "<h1>Dunes</h1>\
  My summer vacation to the Oregon Coast. I love the sandy dunes!",

  "<h1>Countryside Lane</h1>\
  We enjoyed a quiet stroll down this countryside lane.",

  "<h1>Sunset</h1>\
  Sunset at the coast! The sky turned a lovely shade of orange.",

  "<h1>Cave</h1>\
  I did a tour of a cave today and the view of the landscape below was breathtaking.",

  "<h1>Bluebells</h1>\
  I walked through this meadow of bluebells and got a good view of the snow on the mountain \
  before the fog came in."

];

// Add quotes from above array to each a tag in HTML
$('#lightgallery a').each(function(index){
  $(this).attr('data-sub-html', quotes[index]);
});


