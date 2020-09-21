
/* 2️⃣ Initialize Magic Instance */
const magic = new Magic("pk_test_203D0BB15B42A4C8");
// window.serverUrl = "http://localhost:8888/user"
window.serverUrl = "https://app.weteachblockchain.org/user"

/* 3️⃣ Implement Render Function */
const renderMagic = async () => {
  console.log('magic render triggered')

  window.isLoggedIn = await magic.user.isLoggedIn();
  console.log('checking user login', window.isLoggedIn)

  /* Show login form if user is not logged in */
  let html = `
    <form class="loginForm" onsubmit="handleLogin(event)">
      <h3>You are Not Logged In</h3> 
      <span>Instructor notes are for internal use only. Use your Ambassador email to sign in below:</span>
        
      <input class="emailInput" type="email" name="email" required="required" placeholder="your_name@any_site.xyz" />
      <button  class="logout"  type="submit">Log In</button>
    </form>
  `;

  if (window.isLoggedIn) {
    /* Get user metadata including email */
    // const userMetadata = await magic.user.getMetadata();
    hideLoginPrompt()
    // handlePageNotification()
  } else {
    document.getElementById("app").innerHTML = html;
  }

};

function noThanks ( ) {
    window.location.href = "https://weteachblockchain.org/"
}

function hideLoginPrompt() {
    console.log('hiding login prompt')
    document.getElementsByClassName('userLoginPrompt')[0].remove()
}

const handleLogin = async e => {
//   console.log('handleLogin running')
  e.preventDefault();
  const email = new FormData(e.target).get("email");
  if (email) {
    // console.log('running login flow')
    const didToken = await magic.auth.loginWithMagicLink({ email });

    // window.localStorage.setItem('didToken', didToken); // we actually don't need to pass this token except for login. Magic does the rest :) 
    console.log('got didtoken', didToken, ' logging into server')
    // await fetch(`${window.serverUrl}/login`, {
    //   headers: new Headers({
    //     Authorization: "Bearer " + didToken
    //   }),
    //   method: "POST"
    // });

    renderMagic();
    // location.reload();
  }
};

window.handleLogout = async () => {
  await magic.user.logout();
  renderMagic();
  noThanks()
};

const handlePageNotification = async () => {
  // console.log('ran page load notification')

  if ( !window.lessonMap ) {
    var payload = { 
      currentPage: window.location.href 
    }
  } else {
    var courseDetails = getCoursePageDetails ( )

    var payload = {
      currentPage : window.location.href,
      isCoursePage : true,
      page : courseDetails.slug,
      title : courseDetails.title,
      course : courseDetails.course,
      totalLessons : courseDetails.totalLessons
    }
  }

  console.log('payload', payload)

  try {
    await fetch(`${window.serverUrl}/updateCurrentPage`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' +  window.localStorage.didToken,
      },
      mode: 'no-cors',
      body: JSON.stringify(payload),
      method: "POST"
    })
    .then( handleAuthErrors )
    .then( response => response.json() )
    .then((responseJSON) => {

      setUserData(responseJSON)

    })

  } catch (err) {
    // console.log('uncaught exception in update call', err)
    // handleBadPageStatusNotification()
  }

};

function setUserData ( userData ) {
  window.userData = userData
  window.localStorage.setItem( 'user', JSON.stringify(userData) )

  // if this is a course directory page - populate progress 
  if ( typeof ( populateCourseProgress ) != 'undefined' ) {
    populateCourseProgress()
  }

  if ( typeof ( displayUserData ) != 'undefined' ) {
    console.log('triggering display User data')
    displayUserData()
  }     

}


function handleAuthErrors(response) {
  // console.log('handleAuthErrors received', response)
  if (!response.ok) {
      handleBadPageStatusNotification();
      throw Error(response.statusText);
  }
  return response;
}

function handleBadPageStatusNotification() {
  window.handleLogout()
  // console.log('could not authenticate the user')
  alert('Your login session has expired. Please log in again!')
}
