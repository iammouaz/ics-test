Recent Updates and Implementations
----------------------------------

### 1\. **Docker Compose Fixes**

-   Resolved the Docker Compose build issue related to environment variables. The problem was caused by an incorrect reference to the `.env` file. The fix involved removing the `env_file: ./api-server-django/.env` directive from the `docker-compose.yml` file.

### 2\. **Backend URL Duplication Issue**

-   Fixed a duplication issue with the backend base URL in the frontend application. The `.env` file was updated to streamline environment variable management and ensure correct API endpoint references.

### 3\. **Authentication and Protected Route Logic**

-   Validated and ensured that the authentication mechanism and protected route logic are functioning as expected. This includes proper user session management and redirection for unauthorized users.

### 4\. **Users Survey Page Implementation**

-   Developed and implemented a new page, **Users Survey**, accessible from the sidebar after logging in. This feature provides insights based on user data.

### 5\. **Data Table Component**

-   Created a reusable table component to display data fetched from the API at `https://ics.pythonanywhere.com/api/fetch-data/`. This component is integrated into the **Users Survey** page for a clean and dynamic data presentation.

### 6\. **Apollo Client Integration**

-   Installed and configured Apollo Client to manage GraphQL data fetching and caching across the app. This setup improves the efficiency and maintainability of the data layer.

### 7\. **GraphQL Query for Films**

-   Implemented a GraphQL query, **GetAllFilms**, to retrieve film details along with pagination. This query is integrated into the `Users Survey` page and can be found in `react-ui/src/views/admin/usersSurvey/index.jsx`.