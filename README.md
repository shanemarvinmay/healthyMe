# healthyMe
This is  fitness and health app I'm making because there isn't a good free one out there.

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