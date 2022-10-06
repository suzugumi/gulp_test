const { gulp ,  task  , src, dest , series  ,   watch   , parallel } = require('gulp');

const test =  () => {
    console.log('変更しました')
}

module.exports = test;
