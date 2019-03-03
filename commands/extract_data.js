/*CMD
  command: extract_data
  help: 
  need_reply: 
  auto_retry_time: 600

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

                     
var version = content.split("Current Version")[1].split("</span")[0];
var arr = version.split(">");
version = arr[arr.length-1];

Bot.runCommand("save_data " + version);
