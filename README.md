# Weekly-Calendar-App

#Psuedo-Coding
    HTML:
    - Hour Column and Save Button
    - 9 rows for 9 hours in between
    - 

Link everything with CSS Classes

Create basic HTML to resemble mockup
    - Create 9 rows with 3 columns each.
    - Time column = size 1
    - Hour column = size 10
    - Save button = size 1


- Set up an event handler for our save button
    - Listen for clicks on each time block's save button, then save to local storage
    - Load any saved data from local storage (to display on page, or can we do this in bootstrap?)

- Figure out how to create our text area within rows (look on Bootstrap)

JS Function to track our hours and color code our timeblocks

- Display the day, month, and the day of month. Check Moment.js for exact format. 
- Moment.js, figure out formatting (time interval 9AM-9:59AM)
    - Figure out how to grab an entire hour.  Use startof function. 

- Color coding of time blocks
    - If current hour > time block hur set it to past (gray - check CSS class)
    - If current hour === time block hour set it to present (red - check CSS class)
    - Otherwise set time blocks to the future (green - check CSS class)
