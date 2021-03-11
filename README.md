

### build a site

https://ithelp.ithome.com.tw/articles/10213883


### fixed not reload steps:  

https://github.com/gatsbyjs/gatsby/issues/13918  

check the Ans. as follow:  


emthorne commented on Jan 15, 2020

RilDev commented on Aug 24, 2020

Solved by adding a src/pages/404.js file.

```
import React from 'react'

const PageNotFound = () => {
  return <>404, page not found!</>
}

export default PageNotFound

```


refer online course:  

https://www.youtube.com/watch?v=8t0vNu2fCCM
