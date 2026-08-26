const TASKS = {
  plants_5: '6CFA8867F65465D2',
  plants_10: '6C5BC7D99F986162',
  plants_50: '0BB17E96106E9717',
  plants_100: '79FA55CD653C94B5',
  all_animals: '59BE1B27F161665D',
  all_bosses: '56E77164FC4B1F2F',
  all_monsters: '22838BDA7DB3EA23',
  all_plants: '1ADDD6FB306A3FA5',
}

const TASKS_LIST = Object.values(TASKS)

/**
 * @param {$ServerPlayer} player 
 * @param {string} taskID 
 */
function completeTask(player, taskID) {
  const questData = FTBQuests.getServerDataFromPlayer(player)
  if (questData.getTaskProgress(taskID) > 0) return
  questData.addProgress(taskID, 1)
}

TASKS_LIST.forEach(task => {
  FTBQuestsEvents.customTask(task, event => {
    event.setMaxProgress(1)
  })
})

ItemEvents.firstRightClicked('minecraft:stick', event => {
  const { player } = event
  completeTask(player, TASKS.plants_5)
})


FieldGuideEvents.entryUnlocked(event =>{
    const { player } = event
    var plants = FieldGuide.getUnlockedCountForCategory(event.player, 'fieldguide:plants')
    
switch (plants) {
        case 5:
            if (!event.player.stages.has('5plants')) {
                completeTask(player, TASKS.plants_5)
                event.player.stages.add('5plants')
            }
            break
        case 10:
            if (!event.player.stages.has('10plants')) {
                completeTask(player, TASKS.plants_10)
                event.player.stages.add('10plants')
            }
            break
        case 50:
            if (!event.player.stages.has('50plants')) {
                completeTask(player, TASKS.plants_50)
                event.player.stages.add('50plants')
            }
            break
        case 100:
            if (!event.player.stages.has('100plants')) {
                completeTask(player, TASKS.plants_100)
                event.player.stages.add('100plants')
            }
            break
    }
})


FieldGuideEvents.categoryCompleted('fieldguide:animals', event => {
        const { player } = event
    event.player.tell('Congratulations! You have catalogued every animal in your Field Guide!')
    completeTask(player, TASKS.all_animals)
})

FieldGuideEvents.categoryCompleted('fieldguide:bosses', event => {
        const { player } = event
    event.player.tell('Congratulations! You have catalogued every boss in your Field Guide!')
    completeTask(player, TASKS.all_bosses)
})

FieldGuideEvents.categoryCompleted('fieldguide:monsters', event => {
        const { player } = event
    event.player.tell('Congratulations! You have catalogued every monster in your Field Guide!')
    completeTask(player, TASKS.all_monsters)
})

FieldGuideEvents.categoryCompleted('fieldguide:plants', event => {
        const { player } = event
    event.player.tell('Congratulations! You have catalogued every plant in your Field Guide!')
    completeTask(player, TASKS.all_plants)
})