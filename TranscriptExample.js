const { fetchTranscript } = require('../../index');//module.exports.fetchTranscript = require('./Transcript/fetchTranscript') in index.js
const {MessageAttachment} = require('discord.js')

module.exports = {
    name : 'transcript',
    timeout : 1000,
    run : async(bot, message) => {
      fetchTranscript(message, 99)
              .then(data => {
                  const file = new MessageAttachment(data, 'transcript.html');
                  message.channel.send(file)
              })
    }}
