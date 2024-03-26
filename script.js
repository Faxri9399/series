const numberOfSeries = +prompt("Nechta serial kurdingiz", "");

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Oxirgi kurgan seriliz?"),
  b = prompt("Nechi baho berasiz?"),
  c = prompt("Oxirgi kurgan seriliz?"),
  d = prompt("Nechi baho berasiz?");
seriesDB.series[a]=b;
seriesDB.series[c]=d;

console.log(seriesDB);