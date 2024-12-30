FROM node:18

WORKDIR /app

# Install dependencies separately for caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port used by Vite
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]

