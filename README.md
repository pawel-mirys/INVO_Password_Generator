Brief

The goal of the task is to code the logic and the best possible reproduction of the design for a random password generator. The generator has the ability to generate passwords of different lengths and complexity levels depending on the user's choice. To test the operation, it is worth testing the password generator provided by LastPass - https://www.lastpass.com/features/password-generator

se the starter code in the asset package to complete the task. Use the SCSS preprocessor and React framework.

In the end, the final project should meet the following assumptions:

    The default password length is 6. The user can adjust the length of the password using a slider. The minimum length should be 4, and the maximum 16
    The default password complexity options should include all options except "Include lowercase"
    Of all the possible password complexity options, at least one must be selected. It is not possible to deselect all options (then there would be nothing to generate a password from)
    At the start, the password field should contain a password generated according to the default values
    The password should be regenerated after each parameter change by the user or after clicking the refresh icon in the password field
    After clicking the "Copy password" button, the password should be copied to the clipboard
    The password strength should be calculated based on the password parameters selected by the user. Decide on the exact algorithm for yourself
    The section should be displayed properly on all types of devices (remember to test responsiveness for all resolutions and on a physical mobile device)
    The section should have properly handled interactive elements such as links or buttons (the user should feel that something is happening when hovering over an interactive element)
