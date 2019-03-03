/*CMD
  command: save_data
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(completed_commands_count>0){
   newVersion = params;
   lastVersion = Bot.getProperty("CurrentVersion");

   if(newVersion!=lastVersion){
     Bot.setProperty("CurrentVersion", newVersion, "string");
     Bot.sendMessageToAllChats("New version released: " + 
           newVersion + 
          "\n[download now](https://play.google.com/store/apps/details?id=bb_app.com.bots.business)");
    }
}
