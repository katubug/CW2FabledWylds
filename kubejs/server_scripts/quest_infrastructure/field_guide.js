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


const PLANT_MILESTONES = [
  [5, TASKS.plants_5],
  [10, TASKS.plants_10],
  [50, TASKS.plants_50],
  [100, TASKS.plants_100],
]

const CATEGORY_TASKS = {
  'fieldguide:animals': TASKS.all_animals,
  'fieldguide:bosses': TASKS.all_bosses,
  'fieldguide:monsters': TASKS.all_monsters,
  'fieldguide:plants': TASKS.all_plants,
}

// >= not ==, so a count passed while the quest was still locked gets picked up later
function checkPlants(player) {
  let plants = FieldGuide.getUnlockedCountForCategory(player, 'fieldguide:plants')
  PLANT_MILESTONES.forEach(m => {
    if (plants >= m[0]) completeTask(player, m[1])
  })
}

FieldGuideEvents.entryUnlocked(event => {
  checkPlants(event.player)
})

// catch up anything missed (locked quest, team swap etc)
PlayerEvents.loggedIn(event => {
  let player = event.player
  checkPlants(player)
  Object.keys(CATEGORY_TASKS).forEach(cat => {
    if (FieldGuide.isCategoryCompleted(player, cat)) completeTask(player, CATEGORY_TASKS[cat])
  })
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
