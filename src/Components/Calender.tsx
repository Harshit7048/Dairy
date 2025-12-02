export default function Calender() {
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()
    
    // Get the first day of the month and number of days
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    
    // Generate all days to display (including previous month's trailing days and next month's leading days)
    const calendarDays: (number | null)[] = []
    
    // Add previous month's trailing days (empty cells)
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null)
    }
    
    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day)
    }
    
    // Fill remaining cells to make a complete grid (6 rows x 7 columns = 42 cells)
    const remainingCells = 42 - calendarDays.length
    for (let i = 0; i < remainingCells; i++) {
        calendarDays.push(null)
    }
    
    // Check if a date is today
    const isToday = (day: number | null): boolean => {
        if (day === null) return false
        return day === today.getDate()
    }
    
    // Check if a day is from the current month
    const isCurrentMonth = (day: number | null, index: number): boolean => {
        return day !== null && index >= firstDayOfMonth && index < firstDayOfMonth + daysInMonth
    }
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h3>{monthNames[currentMonth]} {currentYear}</h3>
            </div>
            <div className="calendar-grid">
                {/* Day names header */}
                {dayNames.map((dayName, index) => (
                    <div key={index} className="calendar-day-name">
                        {dayName}
                    </div>
                ))}
                
                {/* Calendar days */}
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`calendar-day ${
                            !isCurrentMonth(day, index) ? 'calendar-day-other-month' : ''
                        } ${isToday(day) ? 'calendar-day-today' : ''}`}
                    >
                        {day !== null ? day : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}