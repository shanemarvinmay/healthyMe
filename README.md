# healthyMe
This is  fitness and health app I'm making because there isn't a good free one out there.

## Resources for rebuild:
* [material design lite](https://getmdl.io/started/index.html#whats-next)
* [cartooning myself](https://chrome.google.com/webstore/detail/cartoon-yourself/ghklbglohploihmahcjmklmmilmlhaeg?hl=en-US)
    * Have some pics in downloads folder
* Graphing and Showing Data:
    * Plotly
        * [github](https://github.com/plotly/plotly.js)
        * [site](https://plot.ly/javascript)
    * [Chartjs](https://www.chartjs.org)
    * [D3](https://github.com/d3/d3/wiki/Tutorials)
    * [Google Charts](https://developers.google.com/chart)

js-cookie is what i use to handle cookies
link: https://github.com/js-cookie/js-cookie

lowdb is the local json db i am using
link: https://github.com/typicode/lowdb

So here is basically how the app will work:
1. check if there is a healthyMe cookie
2. if the cookie is less than a day old 
    - set current counts to ui and update cookie when updates are applied
3. else submit the cookie data to backend to be saved then
    - reset cookie
What the cookie will look like:
healthyMe = {
    date = (the date),
    calories = calorie count,
    water = water count
}
