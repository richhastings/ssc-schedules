## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Use cases completed

- As a user I initially get presented with a list of the available schedules.
- As a user I can view a schedule corresponding log entries by selecting its card.

## Further work completed

- Basic UI based on wireframes with color-coded schedule logs
- Filter schedules based on retured/unretired state
- Deploy front-end site to [Netlify](https://ornate-gingersnap-326342.netlify.app/) (will not work unless local API server is running)
- Updates to API server found [here](https://github.com/richhastings/blueprism-api-server)
  - Change port so it doesn't clash with front end
  - Change file extensions in order to run server

## Additional work to improve if given more time

- Add functionality to retire/unretire schedules by making post requests to the API.
- Deploy API server and fetch from remote API (not localhost)
- Build application to designs and set up Storybook
- Consider adding mobile menu functionality to contain schedule list
- Improve layout of schedule logs on mobile
- Add unit tests
