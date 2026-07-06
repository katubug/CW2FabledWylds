var hourlyCheckActive = false
var ZonedDateTime = Java.loadClass('java.time.ZonedDateTime')
var ZoneOffset = Java.loadClass('java.time.ZoneOffset')

PlayerEvents.loggedIn(event => {
    var server = event.server
    var player = event.player

    if (hourlyCheckActive) return
    hourlyCheckActive = true

    var scheduleNextHourCheck = () => {
        var now = ZonedDateTime.now(ZoneOffset.UTC)
        var secondsUntilNextHour = (60 - now.getMinute()) * 60 - now.getSecond()
        server.scheduleInTicks(secondsUntilNextHour * 20, _e => {
            if (ZonedDateTime.now(ZoneOffset.UTC).getHour() === 0) {
                server.runCommandSilent('say [DEBUG] midnight UTC hit')
                server.runCommandSilent(`ftbquests change_progress ${player.username} reset 58938AAD0B7C8E23`) //reset repeatable quests
            }
            scheduleNextHourCheck()
        })
    }

    scheduleNextHourCheck()
})
