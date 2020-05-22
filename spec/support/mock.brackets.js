/*
 * A mock module to simulate the structure of the Brackets module
 * IMPORTANT NOTE: This is not a requireJS module.
 */
const brackets = () => {
  const getModule = () => ({
    showModalDialog: (err, title, msg) => {
      // eslint-disable-next-line no-console
      console.log(`Show Dialog:${title}\n${msg}\n${err}`);
    },
  });
  return {
    getModule,
  };
};

module.exports = brackets;
