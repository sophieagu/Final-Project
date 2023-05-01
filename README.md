# Final-Project
Final Project Spring 2023
[Link to my GitHub Pages site](https://sophieagu.github.io/Final-Project/)

My project is a fully functioning exercise app geared specifically for people who get their period. 
The application takes user input via a form that asks users to specify the start and end of their last two menstruation cycles. This information is used to calculate the average length (in days) of a user's cycle and menstruation period (the time in which they are bleeding). Through this information, the application can track what phase of their period the user is in and recommend workouts that are most benecificial to the user and their body during this phase.

Users are able to update their information monthly so that the app is up to date with the user's changing cycle. The user is able to view a calendar component that displayes visual markers for their menstruation cycle as well as their specific phases during each cycle. This way, users are able to track the changes in their cycles throughout the months.

I authored and implemented the following components: 
1. HomeScreen which displays options for the user to navigate to the different screens of the application. The user hasa  choice to either update their cycle information, explore each menstruation cycle phase and select a workout, or view their unique cycle calendar.
2. CycleForm which saves user input and uses this information to update a user's phase in their cycle.
3. PhaseScreen which displays phase specific information meant to educate user's about the different phases and why it is important to know which phase you are in. This component takes user input in the form of a choice between the buttons symbolizing a specific phase.
4. DurationScreen which displays a timer and is triggered by a user's choice to do a workout that is of the type: duration. This component takes user input in the form of button choices (Pause, Start, Reset, Back, Home).
5. RepetitionScreen which displays a rep counter and is triggered by a user's choice to do a workout that is of type: repetiton. This component takes user input in the form of button choices (Increase Reps, Reset Reps, Back, Home).

