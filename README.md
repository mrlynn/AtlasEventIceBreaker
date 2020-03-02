# AtlasEventIceBreaker

This is a simple MongoDB Atlas Stitch App using Query Anywhere and MongoDB Charts to ask an ice breaker question to a classroom then plot the results.

It was last used at an Atlas Brewery event, hence the beer question.

To deploy, deploy an Atlas cluster, create a Stitch App, create an anonymous auth provider, create a rule to allow anyone to read/write their own data to the `welcome.responses` collection, copy stitch app ID and replace it in `index.html`, change up any questions you want, change the `hero.png` image, create a graph or graphs you want in Charts, copy unverified iframe URL and add those URLs to the `results.html` `CHARTSURIS` array.

* Updated for iHeart
