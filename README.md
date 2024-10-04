
# User Dashboard Interview Challenge

This is a frontend challenge for candidates to demonstrate their skills in React.js and TailwindCSS. The goal is to create a small dashboard that displays a list of users fetched from an external API, with a search functionality and a detailed user view in a modal.

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (version 14.x or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000/`.

## Interview Instructions

You are tasked with completing a basic user dashboard using React.js and TailwindCSS. This template provides the starting point, and you will be responsible for fetching user data from an API and implementing some missing functionality.

### What you'll need to do:

1. **Fetch User Data**:
   - Use the [RandomUser API](https://randomuser.me/) to fetch a list of users. 
   - API Endpoint: `https://randomuser.me/api/?results=10`
   - Store the data in the state and display the users on the page using the provided `UserCard` component.

2. **User Card Design**:
   - Implement the `UserCard` component (`/components/UserCard.js`), displaying user information such as their picture, name, and location.
   - Style the component using TailwindCSS.

3. **Search Functionality**:
   - Implement the search bar (`/components/SearchBar.js`) to filter users by their name.
   - Use state to manage the search input and apply the filter.

4. **Extra (Optional)**:
   - Display additional user details in a modal when a user card is clicked (e.g., email, phone).
   - Add pagination if there are too many users.

### Evaluation Criteria

- **Functionality**: The app should fetch, display, and filter users properly.
- **Code Quality**: Clean, readable, and modular code.
- **Styling**: Proper usage of TailwindCSS for layout and design.
- **Time Management**: Try to complete as much as possible within the allotted time (1 hour).

Good luck!
