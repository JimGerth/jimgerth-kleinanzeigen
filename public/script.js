var articles;

function preload() {
  articles = loadJSON('content.json');
}

function setup() {
  noCanvas();

  let templateSource = $('#article-template').html();
  let template = Handlebars.compile(templateSource);
  $('#article-list').html(template(articles));

  $(window).scroll(event => {
    console.log(event);
  });
}

function draw() {
  $('.image').css('width', $('.article').css('height'));
}
