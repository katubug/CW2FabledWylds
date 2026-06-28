var hourlyCheckActive = false

PlayerEvents.loggedIn(event => {
    var server = event.server

    if (hourlyCheckActive) return
    hourlyCheckActive = true

    var scheduleNextHourCheck = () => {
        var now = java.time.ZonedDateTime.now(java.time.ZoneOffset.UTC)
        var secondsUntilNextHour = (60 - now.getMinute()) * 60 - now.getSecond()
        server.scheduleInTicks(secondsUntilNextHour * 20, _e => {
            if (java.time.ZonedDateTime.now(java.time.ZoneOffset.UTC).getHour() === 0) {
                server.runCommandSilent('say [DEBUG] midnight UTC hit')
            }
            scheduleNextHourCheck()
        })
    }

    scheduleNextHourCheck()
})
