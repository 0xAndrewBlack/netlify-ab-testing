# Netlify AB Testing

> NOTE: It is a useful feature to power up beta releases original idea and code is from:

You can create a beta release feature with it.

# Walkthrough

1. Deploy 2 branches and make changes on the `test` branch for example different color scheme.
2. Enable Spit-Testing in the netlify dashboard of your site.
3. Set 100% the master and 0% the test branch and start the testing.
4. Use the script to set the `nf_ab` cookie value to the string of the test branch name of your choice.
5. When the cookie changed to test it will reflect the test branch deploy, and if its deleted it will reflect the default master deploy with a random cookie value.

# My use case

I am using it on my site to power up faster deploys some of them contains some ideas that will scrapped over the time,
but most of them will end up on the master branch too.

# Future Ideas

- Add CSS animation (glowing effect) to the button to convince the user to enable testing features.
- Add an active class when enabled
