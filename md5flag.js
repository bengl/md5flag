
var Crypto = require('cryptojs').Crypto,
    ansi = require('ansi'),
    Canvas = require('canvas'),
    fs = require('fs');
    cursor = ansi(process.stdout);

function invert(color){
  var chunks = color.match(/.{1,2}/g),
      flip = function(byt){
        return (0xFF-parseInt(byt,16)).toString(16);
      };
  return [
    flip(chunks[0]),
    flip(chunks[1]),
    flip(chunks[2])
  ].join("");
}

var hash = function(string){
  return Crypto.MD5(string);
};
module.exports.hash = hash;

function splitHash(string){
  return hash(string).match(/.{1,6}/g);
}

module.exports.term = function(stream,string){
  var space = "    ",
      cursor = ansi(stream),
      colors = splitHash(string);

  for (var i = 0; i < 5; i++){
    for (var j = 0; j < 5; j++)
      cursor.bg.hex(colors[j]).write(space);
    cursor.reset().write('\n');
  }
  for (var k = 0; k < 4; k++)
    cursor.bg.hex(colors[k]).write(space);
  cursor.bg.hex(colors[4])
        .fg.hex(invert(colors[4]))
        .write(" +"+colors[5].toUpperCase())
        .reset().write('\n');
};

module.exports.png = function(string, totalWidth, totalHeight, outputDir){
  var width = totalWidth/5,
      canvas = new Canvas(totalWidth,totalHeight),
      ctx = canvas.getContext('2d'),
      colors = splitHash(string);
  for (var i = 0; i < 5; i++) {
    ctx.fillStyle = "#"+colors[i];
    ctx.fillRect(i*width,0,width,totalHeight);
  }
  ctx.font = '60px "Courier New"';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#'+invert(colors[4]);
  ctx.fillText('+'+colors[5].toUpperCase(), totalWidth - 110, totalHeight - 10);
  var out = fs.createWriteStream(outputDir + '/' + colors.join('') + '.png'),
      stream = canvas.createPNGStream();
  stream.on('data', function(chunk){
    out.write(chunk);
  });
};
