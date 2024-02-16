body, html {
  margin: 0;
  height: 100%;
  font-family: 'Roboto', sans-serif; /* Using Roboto font */
  background-color: #e9f5f8; /* Slightly off-white background */
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 10vh 20px;
  transition: all 0.3s ease;
}

.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.ion-container-outer, .outside-circle, .middle-circle, .inside-circle, .ion-container-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}


.outside-circle {
  width: 55vmin; 
  height: 55vmin; 
  border: 0.1vw solid black;  /* outer border */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
}

.middle-circle {
  width: 52vh; 
  height: 52vh;
  border: 0.1vw solid black;  /* inner border */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b6cef3;
}

.inside-circle {
  width: 49vh; 
  height: 49vh; 
  border: 0.25vh black;
  border-radius: 50%;
  background-color: b6cef3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ion-container-outer {
  width: 90vmin; 
  height: 80vmin;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ion-container-inner {
  width: 45vh; 
  height: 45vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.membrane-potential {
  position: absolute;
  bottom: 45%;   /* Adjust this value as needed */
  left: 50%;
  transform: translateX(-50%);  /* Centers the div horizontally */
  text-align: center;
  font-size: 1.8vw;
  font-family: 'Roboto', sans-serif;
  z-index: 1;   /* Make sure it appears on top */
}


.ion-concentration-outer {
  position: absolute;
  top: 45%;  /* Adjust as necessary */
  left: 11%;
  transform: translateX(-50%);
  font-size: 1.8vw;   /* Adjust font size as necessary */
  background-color: rgba(255, 255, 255, 0.7);  /* Semi-transparent background for readability */
  padding: 0.1vw 0.2vw;
  border-radius: 5px;
  z-index: 10;  /* Ensures it's above other elements */
}

.ion-concentration-inner {
  position: absolute;
  bottom: 5%;  /* Adjust as necessary */
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8vw;   /* Adjust font size as necessary */
  background-color: rgba(255, 255, 255, 0.7);  /* Semi-transparent background for readability */
  padding: 0.1vw 0.5vw;
  border-radius: 5px;
  z-index: 10;  /* Ensures it's above other elements */
}

.button-container {
  display: flex;
  flex-direction: column; /* Stacks the groups vertically */
  margin-top: 1vw; /* Space above the button container */
  width: 50vw;
  margin: 0 auto;
  padding-left: 5vw;
  align-items: center;
}

.chemical-gradient-buttons, .electrical-gradient-buttons, .options-buttons {
  display: flex;
  flex-direction: row; /* Changed to row */
  padding-bottom: 3vw;
  gap: 1vw; 
  align-items: center; 
  justify-content: center; /* Ensure items are centered horizontally */
}

.gradient-button, #new-question-btn, #see-instructions-btn {
  display: inline-flex; /* Use flexbox for easy centering */
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering */
  padding: 1vw 1vw;               /* Increase padding for a more spacious look */
  width: 6.2vw;
  height: 5vw;
  font-size: 1vw;                /* Slightly larger font */
  border: none;                    /* Remove any border */
  border-radius: 2vw;             /* Fully rounded edges */
  background: linear-gradient(135deg, #62a8ea, #845ef7);  /* Gradient background */
  color: white;                    /* White text */
  cursor: pointer;                 /* Hand cursor on hover */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);  /* Soft shadow for depth */
  transition: all 0.3s ease;       /* Transition for smooth hover effect */
  text-decoration: none;
  letter-spacing: 0.5px;
}


.chemical-gradient-buttons > button, 
.electrical-gradient-buttons > button, 
.question-button > button {
    margin-left: 0.5vw; /* Add spacing between the buttons */
}

.button-group-header {
  font-weight: bold;          /* Make the font bold */
  font-size: 1.4vw;          /* Increase the font size */
  margin-bottom: 15px;       /* Add some space below the header */
  text-align: center;        /* Center-align the text */
  padding: 5px 10px;         /* Add some padding */
  background-color: #f2f2f2; /* A light gray background for distinction */
  border-radius: 5px;        /* Rounded corners */
}

.gradient-button:active {
  transform: translateY(0px);      /* Reset the lift effect */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);  /* Reset the shadow to original */
}

/* Enhance the button appearance when hovered */
.gradient-button:hover, .options-button:hover {
  background: linear-gradient(110deg, #62a8ea, #845ef7);  /* Slightly alter the gradient */
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.13);  /* Increase the shadow depth */
  transform: translateY(-2px);    /* Small lift to the button */
}

.instruction-box {
  display: flex;
  justify-content: space-between;
  align-items: centre;
  padding: 1vw;
  position: fixed;  /* Keeps the instruction box in a fixed position */
  bottom: 5%;       /* Margin from the bottom of the viewport */
  left: 2%;         /* Margin from the left of the viewport */
  right: 2%;        /* Ensures the box does not stretch across the entire screen width */
  padding: 2%;    /* Increased padding for better text spacing */
  background-color: #ffffff;  /* Light background color for better contrast */
  color: #000000;    /* Dark text color for high contrast */
  text-align: center;  /* Centers the text */
  font-size: 1.5vw;    /* Larger font size for easier reading */
  font-family: 'Roboto', sans-serif;  /* Maintains the Roboto font for consistency */
  z-index: 9999;    /* Ensures the instruction box is layered above other elements */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);  /* Adds a shadow for depth, improving separation from the background */
  border-radius: 10px;  /* Rounded corners for a modern look */
  border: 1px solid #dddddd;  /* Subtle border can help with visibility on complex backgrounds */
  max-width: 96%;    /* Prevents the box from becoming too wide on large screens */
  margin: auto;      /* Centers the box horizontally */
  box-sizing: border-box;  /* Ensures padding is included in the width and height */
}

.instruction-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.instruction-box p {
  margin: 0; /* Remove margin to ensure alignment */
  flex-grow: 1; /* Ensures the paragraph uses available space, pushing the button to the right */
}

#next-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5vw; /* Adjust size as needed */
  color: #000; /* Adjust color as needed */
  padding-left: 1vw; /* Ensure some space between the text and the arrow */
}



