  // store data in sessionStorage 

  sessionStorage.setItem('userNames', 'Karuppasamy')
  sessionStorage.setItem('userIds', '917722013')

  // retrive data from sessionStorage

  const userNames = sessionStorage.getItem("userNames")
  let userIds = sessionStorage.getItem("userIds")

  console.log("userNames : " + userNames)
  console.log("userIds : " + userIds) 
  
  // convert userIds string to number

  let NewUserIds: number = Number(userIds)
  console.log("userIds to Number : " + typeof(NewUserIds) + NewUserIds)

  // short syntax to get data from local storage

  const userNames1 = sessionStorage.userNames
  const userIds1 = sessionStorage.userIds

  console.log("(shortForm) userNames : " + userNames1)
  console.log("(shortForm) userIds : " + userIds1) 


  // remove an item from sessionStorage

  const keys = 'userNames'

  sessionStorage.removeItem(keys)

  console.log("After removing usernames "+sessionStorage.userNames)

  // remove all item from sessionStorage

  sessionStorage.clear()
  console.log("After removing all " + sessionStorage.userIds)
