FieldGuideEvents.entryUnlocked(event =>{
    var plants = FieldGuide.getUnlockedCountForCategory(event.player, 'fieldguide:plants')
    
switch (plants) {
        case 5:
            if (!event.player.stages.has('5plants')) {
                event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 6CFA8867F65465D2`)
                event.player.stages.add('5plants')
            }
            break
        case 10:
            if (!event.player.stages.has('10plants')) {
                event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 6C5BC7D99F986162`)
                event.player.stages.add('10plants')
            }
            break
        case 50:
            if (!event.player.stages.has('50plants')) {
                event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 0BB17E96106E9717`)
                event.player.stages.add('50plants')
            }
            break
        case 100:
            if (!event.player.stages.has('100plants')) {
                event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 79FA55CD653C94B5`)
                event.player.stages.add('100plants')
            }
            break
    }
})


FieldGuideEvents.categoryCompleted('fieldguide:animals', event => {
    event.player.tell('Congratulations! You have catalogued every animal in your Field Guide!')
    event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 59BE1B27F161665D`)
})

FieldGuideEvents.categoryCompleted('fieldguide:bosses', event => {
    event.player.tell('Congratulations! You have catalogued every boss in your Field Guide!')
    event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 56E77164FC4B1F2F`)
    
})

FieldGuideEvents.categoryCompleted('fieldguide:monsters', event => {
    event.player.tell('Congratulations! You have catalogued every monster in your Field Guide!')
    event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 22838BDA7DB3EA23`)
})

FieldGuideEvents.categoryCompleted('fieldguide:plants', event => {
    event.player.tell('Congratulations! You have catalogued every plant in your Field Guide!')
    event.server.runCommandSilent(`ftbquests change_progress ${player.username} complete 1ADDD6FB306A3FA5`)
})