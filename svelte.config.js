// svelte.config.js
import adapter from '@sveltejs/adapter-static'; // Import the adapter you want to use






export default {
  kit: {
    // Specify the adapter you want to use for deployment
    adapter: adapter(),

    // Specify the paths for the build script
    paths: {
      base: '/path/to/your/app', // Change this to your deployment path
      assets: '/path/to/your/app'
    },

    // Other configuration settings...
  }
};
