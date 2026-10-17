// chapter id -> its Taming the Wylds quest. checkmark stays as the manual fallback
const KEEPSAKE_QUESTS = {
  '37F503706CE1D7D6': '12FEBAA96A443199', // witchery
  '1E6C7DB3D27545CE': '70AD5009FFF90827', // farming & gardening
  '23CEC5718927D582': '64A320AB1B9E18CC', // twilight forest
  '5CD8650A590340E5': '7A44191DEEF62AA7', // the end
  '33D0BE0C8570F275': '1A71F79049845E78', // arts & witchcrafts
  '7F553DB3A577011E': '15EE845180912929', // discovery
  '4DB925317B421272': '38DD348249319143', // wildlife
  '305A3D4D3A205E4A': '37BD9102ACD4B8F1', // culinary arts
}

Object.keys(KEEPSAKE_QUESTS).forEach(chapter => {
  const quest = KEEPSAKE_QUESTS[chapter]
  FTBQuestsEvents.completed(chapter, event => {
    if (!event.data.isCompleted(quest)) event.data.complete(quest)
  })
})
