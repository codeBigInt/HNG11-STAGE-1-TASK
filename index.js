const currentTimeUTC = document.getElementById('currentTimeUTC')
const currentDay = document.getElementById('currentDay')
const now = new Date()
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = now.getUTCDay()

const utcTimeString =  now.toUTCString()

currentTimeUTC.textContent = `${utcTimeString.slice(4, -3)} UTC`

currentDay.textContent = `${dayNames[dayOfWeek].toString()},`

