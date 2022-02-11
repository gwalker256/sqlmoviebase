const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list, updateFilm, deleteFilm } = require("./movies/movieMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    const filmObj = {
      name: argv.title,
      actor: argv.actor,
      // actorTwo: argv.actorTwo,
      // rating: argv.rating
    };
    await addFilm(filmObj);
  } else if (argv.list) {
    await list();
  } else if (argv.update) {
    const search = { where: { name: argv.searchTitle } };
    const filmObj = {
      name: argv.newTitle,
      actor: argv.newActor,
    };
    await updateFilm(search, filmObj);
    // console.log(filmObj);
    // console.log(search);
  }else if (argv.delete){
    const search = { where: { name: argv.entry } };
    await deleteFilm(search);

  } else {
    console.log("wrong query");
  }
};

app();
