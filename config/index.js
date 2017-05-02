/**
 * Created by NB on 5/2/2017.
 */

module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
};